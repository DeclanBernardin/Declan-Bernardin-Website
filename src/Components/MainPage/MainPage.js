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
                        <a href="#About" ><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', }} label="About" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Skills"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px' }}label="Skills" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Projects"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px' }}label="Projects" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#WorkExperience"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px' }}label="Work Experience" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Education"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px' }}label="Education" indicatorColor="primary"
                            textColor="primary"/></a>
                    </div>
                </header>
                <div className="sectionOne">
                <div className="image">
                        <img src="https://raw.githubusercontent.com/DeclanBernardin/DeclanBernardin.github.io/master/Untitled-12.png" alt="image of Declan Bernardin" height="300px" width="300px"></img>
                </div>
                    <div className="contact">
                    <h1>Declan Bernardin</h1>
                </div>
                </div>
                <section id="About">
                    <h1 className="About"> About Me </h1>
                    <a className="linkedIn" href="https://www.linkedin.com/in/declan-bernardin-678045191/"><Tab label={<LinkedInIcon />} /></a>
                    <a className="gitHub" href="https://github.com/DeclanBernardin"><Tab label="GitHub" /></a>
                </section>
                <section id="Skills">
                    <h1 className="Skills">Skills</h1>
                </section>
                <section id="Projects">
                    <h1 className="Projects">Projects</h1>
                </section>
                <section id="WorkExperience">
                    <h1 className="WorkExperience">Work Experience</h1>
                </section>
                <section id="Education">
                    <h1 className="Education">Education</h1>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);