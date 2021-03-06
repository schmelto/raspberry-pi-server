# raspberry-pi-server

## Start Server

To connect to the Rasperry Pi you can use SSH.

```console
ssh raspberrypi -l pi
```

Than you have to start the server.

```console
npm install
npm start
```

This will start a NodeJs Server on the Raspberry Pi.
If there are any changes in the code (pulled with `git pull`), the server will restart automatically.

## Update Raspberry Pi

```console
sudo apt-get update
```

```console
sudo apt-get dist-upgrade
```

```console
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

```console
sudo apt-get install -y nodejs
```

```console
node -v
```

```console
sudo apt-get install mongodb-server
```

```console
mongo --version
```
