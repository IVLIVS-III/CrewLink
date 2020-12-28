[![GPL-3.0 License][license-shield]][license-url] [![Appveyor Build][appveyor-shield]][appveyor-url]

<br />
<p align="center">
  <a href="https://github.com/ottomated/CrewLink">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CrewLink</h3>

  <p align="center">
    Free, open, Among Us proximity voice chat.
    <br />
    <a href="https://github.com/ottomated/CrewLink/issues">Report Bug</a>
    ·
    <a href="https://github.com/ottomated/CrewLink/issues">Request Feature</a>
    ·
    <a href="#installation"><b>INSTALLATION INSTRUCTIONS</b></a>
  </p>
  <p align="center">
  <b><a href="https://paypal.me/ottomated">DONATE TO THE PROJECT</a></b>
  (all donations will be used for server costs or paying for college)
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Changes](#changes)
  * [Installing the modified version](#installing-the-modified-version)
* [About the Project](#about-the-project)
* [Installation](#installation)
* [Development](#development)
  * [Prerequisites](#prerequisites)
  * [Setup](#setup)
* [Contributing](#contributing)
* [License](#license)



<!-- CHANGES -->
## Changes

This branch includes some PRs of the original that haven't been merged yet. These are:
* (new) #294: Add In-Game Overlay (https://github.com/ottomated/CrewLink/pull/294)
* (new) #192: Add "Haunting" of Impostors (https://github.com/ottomated/CrewLink/pull/192)
* (new) #375: Trim Server URL (https://github.com/ottomated/CrewLink/pull/375)
* (new) #376: Allow Users To Adjust Live Player Volumes While Dead (https://github.com/ottomated/CrewLink/pull/376)
* (new) #353: Muffling vents (https://github.com/ottomated/CrewLink/pull/353)
* (new) #288: Adds ability for imposters within a vent to hear other imposters in vents (https://github.com/ottomated/CrewLink/pull/288)
* (new) #149: Add support for TURN server and allow configurable STUN server (https://github.com/ottomated/CrewLink/pull/149)


### Installing the modified version
<!--
First uninstall the old version.

The installer can be downloaded from https://storage.googleapis.com/crewlink-ivlivs.appspot.com/CrewLink%20Setup%201.2.0-m.1.exe
-->

Use this version together with the modified server version at https://github.com/IVLIVS-III/CrewLink-server/tree/1.2.0-m.1


<!-- ABOUT THE PROJECT -->
## About The Project

This project implements proximity voice chat in Among Us. Everyone in an Among Us lobby with this program running will be able to communicate over voice in-game, with no third-party programs required. Spatial audio ensures that you can only hear people close to you.

## Installation

Download the latest version from [releases](https://github.com/ottomated/CrewLink/releases) and run the `CrewLink-Setup-X.X.X.exe` file. You may get antivirus warnings, because this program hooks into the Among Us process to read game data.

If you can, you should use a private server by deploying [this repository](https://github.com/ottomated/CrewLink-server).

### Setup Instructions (click)

[![Setup Video](https://img.youtube.com/vi/_8F4f5iQEIc/0.jpg)](https://www.youtube.com/watch?v=_8F4f5iQEIc "CrewLink Setup Instructions")

## Development

You only need to follow the below instructions if you are trying to modify this software. Otherwise, please download the latest version from the [github releases](https://github.com/ottomated/CrewLink/releases).

Server code is located at [ottomated/CrewLink-server](https://github.com/ottomated/CrewLink-server). Please use a local server for development purposes.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Python](https://www.python.org/downloads/)
* [node.js](https://nodejs.org/en/download/)
* yarn
```sh
npm install yarn -g
```

### Setup

1. Clone the repo
```sh
git clone https://github.com/ottomated/CrewLink.git
cd CrewLink
```
2. Install NPM packages
```sh
yarn install
```
3. Run the project
```JS
yarn dev
```

<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the GNU General Public License v3.0. See `LICENSE` for more information.


[license-shield]: https://img.shields.io/github/license/ottomated/CrewLink.svg?style=flat-square
[license-url]: https://github.com/ottomated/CrewLink-server/blob/master/LICENSE
[appveyor-shield]: https://img.shields.io/appveyor/build/ottomated/crewlink
[appveyor-url]: https://ci.appveyor.com/project/ottomated/crewlink
