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

    state={
        about: true,
        skills: true,
        projects: true,
        workExperience: true,
        education: true,
    }

toggleAbout = () => {
    this.setState({
        about: !this.state.about
    })
    console.log(this.state.about);
    
}

toggleSkills = () => {
    this.setState({
        skills: !this.state.skills
    })
    console.log(this.state.skills);
    
}

toggleProjects = () => {
    this.setState({
        projects: !this.state.projects
    })
    console.log(this.state.projects);
    
}

toggleWorkExperience = () => {
    this.setState({
        workExperience: !this.state.workExperience
    })
    console.log(this.state.workExperience);
    
}

toggleEducation = () => {
    this.setState({
        education: !this.state.education
    })
    console.log(this.state.education);
    
}

    render(){
        return(
            <div className="body">
                <header >
                    
                    <div className="header">
                        <a href="#About" ><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }} label="About" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Skills"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Skills" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Projects"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Projects" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#WorkExperience"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Work Experience" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Education"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Education" indicatorColor="primary"
                            textColor="primary"/></a>
                    </div>
                </header>
                <div className="sectionOne">
                
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Redone-Image.png" alt="image of Declan Bernardin" height="500px"  style={{float: 'Right', margin: '0px', paddingTop: '', }}></img>
                    <div className="contact">
                    <h1>DECLAN BERNARDIN</h1>
                </div>
                </div>
                {this.state.about ? <section id="About">
                    <h1 style={{ textAlign: 'center', color: 'black', }}> About Me </h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/ClickHere.png" onClick={this.toggleAbout}></img>
                    <a className="linkedIn" href="https://www.linkedin.com/in/declan-bernardin-678045191/"><Tab label={<LinkedInIcon />} /></a>
                    <a className="gitHub" href="https://github.com/DeclanBernardin"><Tab label="GitHub" /></a>
                </section> :
                <section id="About">
                    <h1>About</h1>
                </section>}

                {this.state.skills ? <section id="Skills">
                    <h1 style={{ textAlign: 'center', color: 'black', }}>Skills</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/ClickHere.png" onClick={this.toggleSkills}></img>
                </section> :
                <section id="Skills">
                    <h1>Skills</h1>
                </section>}

                {this.state.projects ? <section id="Projects">
                    <h1 style={{ textAlign: 'center', color: 'black', }}>Projects</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/ClickHere.png" onClick={this.toggleProjects}></img>
                </section> :
                <section id="Projects">
                    <h1>Projects</h1>
                </section>}

                {this.state.workExperience ? <section id="WorkExperience">
                    <h1 style={{ textAlign: 'center', color: 'black', }}>Work Experience</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/ClickHere.png" onClick={this.toggleWorkExperience}></img>  
                </section> :
                <section id="WorkExperience">
                    <h1>Work Experience</h1>
                </section>}

                {this.state.education ? <section id="Education">
                    <h1 style={{ textAlign: 'center', color: 'black', }}>Education</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/ClickHere.png" onClick={this.toggleEducation}></img>
                </section> :
                <section id="Education">
                    <h1>Education</h1>
                </section>}
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);