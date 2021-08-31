import git 

git_dir = 'https://github.com/schmelto/raspberry-pi-server.git'
g = git.cmd.Git(git_dir)
g.pull()

