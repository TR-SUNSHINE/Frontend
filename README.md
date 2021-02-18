# Frontend

As part of this project the Frontend repository will be used to version control the source code for the projects Frontend which is developed using React and Bootstrap.  
<br>
React is an open-source, front end, JavaScript library for building user interfaces or UI components.
<br>
<br>
Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases.
<br>
## Steps to clone the repository locally
### Navigate to working directory <br>
git clone https://github.com/TR-SUNSHINE/Frontend.git <br>
### Install additional frameworks and components <br>
#### React Routers <br>
npm install react-router-dom <br>
#### Material UI <br>
npm install @material-ui/core <br>
Note: Material UI framework is installed but not used.
#### React Bootstrap  <br>
npm install react-bootstrap bootstrap <br>

## Repository Rules

### Change Type
Throughout the project there will be changes that fall into different categories depending on the piece of work that is going to be delivered. Each change type is categorised as below:

FEAT: The new feature you're adding to a particular application <br/>
FIX: A bug fix <br/>
STYLE: Feature and updates related to styling <br/>
REFACTOR: Refactoring a specific section of the codebase <br/>
TEST: Everything related to testing <br/>
DOCS: Everything related to documentation

### New Branches
A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history.

The below naming convention and rules should be used when creating a new branch:

1) The new branch name must be created with the change type (listed above) in capital letters, followed by underscore, followed by a short description of what you are developing all in lowercase
2) If the feature name is more than one word then each word must be separated with a _

#### Usage
1) For creating a new branch the git command would be similar to below:
2) git checkout -b FEAT_sunshine_api
For pushing a change to the remote branch the git command would be similar to the below commands:
-git add .  <br/>
-git commit -m “FEAT: Individual_walk”  <br/>
-git push origin br_sunshine_api  <br/>
	
### Merging changes to the main branch
Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

#### Usage
1) Merging to the main branch should happen by each team member once per day
2) When a member of the team has completed work in their branch they should first initiate a pull from the remote main branch to their local main branch following the below commands (FEAT_sunshine_api represents the name of the branch that was created which contains the code changes):
-git checkout main <br/>
-git pull origin main <br/>
-git checkout FEAT_sunshine_api <br/>
-git merge main <br/>
-git push origin FEAT_sunshine_api <br/>
3) Before merging the changes to the remote main branch you should initiate a pull request via the pull request menu at the top of the repository in GitHub.
4) Set the base branch as main
5) Set the compare branch to the branch containing the change
6) Press “Create pull request”
7) Specify a pull request name
8) Add a descriptive comment about each change you are wanting to merge
9) Assign two members in the team to the list of reviewers on the right hand side
10) Each reviewer will receive a notification to review the merge. Once each member in the team has performed a review and approve the final approver should perform the  action of merging the change by pressing the Merge button which will merge the changes to the main branch.

### Commit Messages
The commit command is used to save changes to a local repository after staging in Git.

The below naming convention and rules should be used when committing any change to any repository in this project:

1) The first word of the commit should be the keyword from the ‘Change Type’ list above in this document with capitalization of each character.
2) Followed by a semicolon and space character
3) Followed by a brief description of the change where the first character of the sentence is capitalized
4) Total length of the commit message is limited to 50 chars
5) Commits to the repository should be little and often

#### Usage
1) For fixing a bug in code the git command would be similar to below:  <br/>
-git commit -m “FIX: Null Exception in Function GetWeather”

### Branch Rules
In this project we are enforcing a two step review and approval by the code owner for each change to each branch.

