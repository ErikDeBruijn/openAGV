# OpenAGV
Open Source AGV resin.io container for Raspberry Pi 2

# Introduction

This is the "brain" of an Autonomous Guided Vehicle. A robot that can be used for internal transposrtation.

# Status

It's not even Alpha, just a proof of concept a.t.m. Also, it's currently fully unsupported. If you want to help out, feel free to send a pull request.

# Architecture

The robot's code runs in a Docker container on the RPi. Deployment is done through resin.io (`git push resin master` means that your robot will have a new brain).

# Requirements

 - BrickPi (by Dexter Labs)
 - Raspberry Pi 2 + SD Card + Pi Camera
 - 2x Lego Mindstorms motors for motion (NXT or EV3)
 - Refectivitiy sensor (Lego NXT/EV3)
 - CMUCam5 Pixy (for color marker/object recognition)
 - Battery Pack (9V)
