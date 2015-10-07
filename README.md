# OpenAGV - Open Source AGV controller

A Docker container that runs on a SoC based computer (e.g. Raspberry Pi 2), deployable through resin.io.

# Motivation

TCP/IP has become a standard because it's open and agnostic. Open in the sense that anyone can implement it. Agonstic in the sanse that a TCP packet can contain web content or an e-mail message. The physical transportation of goods has immensely benefited from the concept of standardized shipping containers. Similarly, it would help if transportation of goods within buildings can be facilitated by creating a standard platform and set of tools. Autonomous Guided Vehicles are generally either expensive (10k to 100k euro) systems or playful hobby projects, but there seems to be little in between that serves a practical use. Because everyone may need a tailored solution, the benefits of an open source framework are great.

# Introduction

This is the "brain" of an Autonomous Guided Vehicle. A robot that can be used for internal transposrtation.

# Status

It's not even Alpha, just a proof of concept a.t.m. Also, it's currently fully unsupported.

# Architecture

The robot's code runs in a Docker container on the RPi. Deployment is done through resin.io (`git push resin master` means that your robot will have a new brain).

# Requirements

 - A resin.io account
 - BrickPi (by Dexter Labs)
 - Raspberry Pi 2 + SD Card + Pi Camera
 - 2x Lego Mindstorms motors for motion (NXT or EV3)
 - Refectivitiy sensor (Lego NXT/EV3)
 - CMUCam5 Pixy (for color marker/object recognition)
 - Battery Pack (9V)

# Contributing

If you want to help out, feel free to send a pull request.