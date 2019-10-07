import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tab from '@material-ui/core/Tab';

const styles = ({
    root: {
        margin: '10px',
        align: 'center',
    },
});

class MainPage extends Component {
    render(){
        return(
            <div className="body">
                <header >
                    
                    <div className="header">
                        <a href="#About"><Tab label="About" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Skills"><Tab label="Skills" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Projects"><Tab label="Projects" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#WorkExperience"><Tab label="Work Experience" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Education"><Tab label="Education" indicatorColor="primary"
                            textColor="primary"/></a>
                    </div>
                </header>
                <div className="sectionOne">
                <div className="image">
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Untitled-1.png" alt="image of Declan Bernardin" height="150px" width="150px"></img>
                </div>
                    <div className="contact">
                    <h1>Declan Bernardin</h1>
                </div>
                </div>
                <section id="About">
                    <h1> About </h1>
                    <a className="linkedIn" href="https://www.linkedin.com/in/declan-bernardin-678045191/"><Tab label={<LinkedInIcon />} /></a>
                    <a className="gitHub" href="https://github.com/DeclanBernardin"><Tab label="GitHub" /></a>
                </section>
                <section id="Skills">
                    <h1>Skills</h1>
                </section>
                <section id="Projects">
                    <h1>Projects</h1>
                </section>
                <section id="WorkExperience">
                    <h1>Work Experience</h1>
                </section>
                <section id="Education">
                    <h1>Education</h1>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);