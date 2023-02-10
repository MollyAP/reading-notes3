Seeing Your Remotes
Running the git remote command, you can view the short names, such as “origin,” of all specified remote handles.
Using git remote -v, you can view all the remote URLs next to their corresponding short names.
$ cd example

$ git remote -v

remote1 https://github.com/remote1/example (fetch)

remote1 https://github.com/remote1/example (push)
Adding Remotes
To create a new remote Git repository with a short name, you can use the following format:
git remote add shortname url
EXAMPLE:
$ git remote
origin
$ git remote add js https://github.com/janesmith/project1
$ git remote -v
origin https://github.com/johndoe/project1 (fetch)
origin https://github.com/johndoe/project1 (push)
js     https://github.com/janesmith/project1 (fetch)
js     https://github.com/janesmith/project1 (push)

Fetching
Fetching entails pulling data that you don’t have from a remote project.
Command format: ' git fetch [remote-name] '
For cloned repositories, use the command ' git fetch origin ' to pull down any new changes that were pushed to the server since you cloned or last fetched from it.
git fetch only pulls new data to a local repository; it does not merge changes with or modify your local work.
Pushing
To push changes “upstream” for sharing, you would have to use the following git push command format:
' git push [remote-name][branch-name] '
EXAMPLE:
$ git push origin master
This command pushes committed changes from your local “master” branch upstream to the “origin” server.
Note: You can only successfully push changes upstream if you have write access for the server from which you cloned, and if someone else has not pushed changes upstream that you haven’t pulled yet. If a collaborator pushed changes upstream after you had cloned, your push will not be successful. You'll have to pull new changes and merge them with your branch before you can successfully push your changes upstream.

Renaming/Removing Remotes
To rename a remote’s short name, use the git remote rename command.
EXAMPLE:
$ git remote rename js jane

$ git remote

origin

jane
*In the example, we can see that the remote’s short name has been changed from js to Jane. The command git remote lists our existing remotes, which jane is now listed as one. The rename action also alters names of remote branches: js/master would change to jane/master.

To remove a remote for whatever reason (e.g., a contributor has left the team, the server has moved), simply use the git remote rm command:
EXAMPLE:
$ git remote rm jane

$ git remote

origin
Reminder: “origin” is simply the default remote name when you use the git clone command.