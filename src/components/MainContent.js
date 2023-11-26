import React from 'react';

function MainContent() {
    return (
        <main id="content">
            <section class="intro">
                <h2>About Me</h2>
                <p>Hello, I'm Apoorv. I'm a software engineer.</p>
            </section>

            <section class="projects">
                <h2>Projects</h2>
                <ul>
                    <li><a href="https://www.weekender.fyi/" target="_blank">weekender.fyi</a></li>
                    <li><a href="https://itinerary-app-pi.vercel.app/landingPage" target="_blank">twitter clone
                        [WIP]</a></li>
                </ul>
            </section>

            <section class="blogs">
                <h2>Blog</h2>
                <ul>
                    <li><a href="blogs/how-I-built-my-portfolio-website.html">How I built this website</a></li>
                    {/* <li><a href="blogs/remote-job.html">My journey of landing a global remote job</a></li> */}
                </ul>
            </section>
        </main>
    );
}

export default MainContent;
