import React from 'react';

import "./popular.styles.scss";

import { fetchPopularRepos } from "../../utils/api";
import Loading from '../../components/loading/loading.component';
import NavLang from '../../components/nav-lang/nav-lang.component';
import ReposGrid from "../../components/repos-grid/repos-grid.component";

export default class Popular extends React.Component {
    state = {
        selectedLanguage: "All",
        repos: {},
        error: null
   };

   componentDidMount() {
       this.updateLanguage(this.state.selectedLanguage);
   }


   updateLanguage = selectedLanguage => {
       this.setState({
           selectedLanguage,
           error: null
       });

       if (!this.state.repos[selectedLanguage]) {
           fetchPopularRepos(selectedLanguage)
           .then(data =>
                this.setState(({repos}) => ({
                    repos: {
                        ...repos,
                        [selectedLanguage]: data
                    }
                }))
            )
            .catch(error => {
                console.warn("Error fetching repos", error);
                this.setState({
                    error: "There was an error fetching the repositories."
                });
            });
       }
   };

   isLoading = () => {
       const {selectedLanguage, repos, error} = this.state;
       return !repos[selectedLanguage] && error === null;
   };

   render() {
       const {selectedLanguage, repos, error} = this.state;
       return (
            <React.Fragment>
                <NavLang
                selected={selectedLanguage}
                onClickLang={this.updateLanguage}
                />
                {this.isLoading() && <Loading text="Fetching repos" speed={250}/>}
                {error && <p className="error"></p>}
                {repos[selectedLanguage] && (<ReposGrid repos={repos[selectedLanguage]}/>)}
            </React.Fragment>               
       );
   }
   
}