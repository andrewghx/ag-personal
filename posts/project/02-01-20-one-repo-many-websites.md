---
titleText: One Repo Many Sites
headTitle: One Repo Many Sites
metaDescription: Generating multiple different static sites from just config files from just one repository. Dealing with the DevOps to make this possible and dealing with deploying to the correct place and the CI pipeline. 
postDate: 02-01-2020
listImgSrcSet: /img/chr-m.png
---
<h2>Problem solving - generating many similar sites from one central repo, the CI pipeline and the development experience</h2>
<p>The company acquired a group of websites with very similar domains (lutonparking.com, heathrowparking.com, stanstedparking.com etc). All of these websites were similar in design and appearance with the only real differences being some of the wording, the links and the actions of the search engines. 
<p>Some examples of these websites:</p>
<a href='https://www.lutonparking.com'>lutonparking.com</a><br />
<a href='https://www.stanstedparking.com'>stanstedparking.com</a>

<p>The existing architecture meant that each site had a repo containing the components to generate the pages and deploy the to the correct bucket. The trouble with this setup is that when you want to make changes to the layout it was necessary to make the same change in 10 other repos - not the most ideal way of operating.</p>
<p>This project had a few goals:</p>
<ul>
  <li>Refactor components and pages to be able to be driven by changes made to config files - truly reusable</li>
  <li>Implement a way of generating more than one site from the same repo so changes to one will be cascaded to all others</li>
  <li>Allow devs to override the default component or stylesheet for a specific site if required (for example have a different header on just one site)</li>
  <li>Ensure that the site to build can be specified during development and at all stages of the CI pipeline (pull request, staging, production)</li> 
  <li>Ensure that pages for a specific site are deployed to the correct place in production</li>
</ul>
<p>I tackled this problem by refactoring components to ensure they could be driven entirely by config. The process of generating this config was to be as simple as possible with only very small changes required for each site (the site code and the domain name). The config directory could be divided into directories for each site and then the config file to use could be specified by an environment variable and running a script before the build process was initiated.</p>
<img srcSet='/img/svg/chr-build-s.svg 500w, /img/svg/chr-build-m.svg 800w' alt='Diagram showing how different configs could build a site' />
<p>Using webpack to specify module resolution it was possible to allow a developer to add a site specific folder to override specific components if required. All of this could be done on the fly during development with webpack dev server in operation.</p>
<p>Environment variables could be set at each level of the CI pipeline to ensure that the correct site was built and also used to ensure the correct bucket was deployed to depending on the website that was being built. All of this involved making necessary changes to our CI scripts that handle deployment.</p>
<img srcSet='/img/svg/chr-deploy-s.svg 500w, /img/svg/chr-deploy-m.svg 800w' alt='Diagram of CI deployment process'>
<h3>Challenges</h3>
<ul>
  <li>Refactor components to be entirely config driven</li>
  <li>Create a JSON config setup to generate the pages and components</li>
  <li>Automating the config generation as much as possible to minimise data input</li>
  <li>Ensure the development process is simple with a script for changing sites on the fly</li>
  <li>Implementing a way of overriding the default 'shared' component on a site by site basis if required</li>
  <li>Ensuring a smooth workflow and compatibility for the new process throughout the CI pipeline</li>
  <li>Ensuring pages are deployed to the correct place in production</li>
</ul>