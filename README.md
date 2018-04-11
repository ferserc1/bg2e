# bg2e
Business-grade graphic engine (bg2e). One repository to rule them all.

This repository contains all the scripts that you'll need to download and build all the
Business-grade Graphics Engine libraries (C++ and JavaScript), the bg2 Composer editor
and the players.

## Development tools

To build the full engine and apps, you'll need to install the following software:

### Windows

- Node.js: needed to run the scripts and build the JavaScript version and the editor.
- Visual Studio 2017
- Visual Studio 2015, if you plan to build the FBX plugin for Composer, you'll need to build the
fbx2bg2 tool. You can also import obj models, but this format does not support more than one UV
channel, and you'll need a second UV channel to generate lightmaps.
- Steam VR: needed to build the VR viewer.
- Git: the scripts need to invoque the git command from PowerShell, if you use a GUI application
such as SourceTree, you'll need to install git.

NOTE: If you are wondering why you need to install two versions of Visual Studio, you could
ask Autodesk why there isn't yet available the FBX SDK version for Visual Studio 2017. I'm currently
 working on testing the fbx2bg2 tool in Visual Studio 2017, but in my experience, there is not
a good idea to mix libraries that uses different versions of Visual Studio

### macOS

- Xcode Tools
- Node.js

### Linux

This is a work-in-progress platform. You can use the JavaScript APIs and the editor, but the FBX
and the lightmap generator are not tested yet.

## Dependencies

The scripts can also download almost all dependencies, excluding the Autodoesk SDK, that
you must to obtain manually from the Autodesk site due to license limitations. But it's
easy: you only must to download the Autodesk FBX SDK version 2018.0 for your specific
platform:

(Autodesk FBX SDK version 2018.0)[https://www.autodesk.com/developer-network/platform-technologies/fbx-sdk-2018-0]

NOTE: In Windows, download the Visual Studio 2015 version.

## Install

NOTE: Do not execute the scripts using Sudo in macOS or Linux. If a script requires root privileges, it will ask
for itself.

You can invoque the main script to install all features, but you also can invoque each script independently. The
script file names are pretty straightforward:

Install all:

```
node install-all.js
```

Install only the C++ APIs and tools:

```
node install-cpp-apis-and-tools.js
```

Install only the JavaScript libraries:

```
node install-javascript-libraries.js
```

However, I recommend installing everithing.

### Update

Each module is a separate git repository, so you can update them separately. But there's also a script to update all
the repositories.

```
node update-repositories.js
```

You can also update the precompiled dependencies executing the following script:

```
node update-dependencies.js
```
