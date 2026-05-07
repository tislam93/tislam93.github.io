---
layout: page
title: ArMORED
description: A $10M NTIA project on energy-efficient massive MIMO Open RAN
img: assets/img/prof_pic.jpg
importance: 3
category: current
related_publications: true
permalink: /projects/armored/
---

**Role.** Energy efficiency research lead and field deployment lead, 2025 – present.
**Funding.** $10M, NTIA Public Wireless Supply Chain Innovation Fund (NOFO-2).
**Partners.** Skylark Wireless, Eridan Inc., Iowa State University.
**Full name.** Architecture for mMIMO Open RAN Energy-efficient Devices.

## What it is

Massive MIMO is one of the few wireless techniques that scales, but only if the radio units can hit aggressive power and cost targets. ArMORED is building a new generation of energy-efficient O-RU prototypes alongside Skylark Wireless and Eridan, then putting them through the kind of field measurements that determine whether a clever architecture survives contact with a real network. The energy story matters because mMIMO at scale is otherwise expensive enough (in watts, in heat, in TCO) to limit where it can be deployed.

## What I do

I lead the energy efficiency study: measurement methodology, test case design, and the comparative analysis across architectures. On the deployment side, I'm taking the new O-RU prototype and integrating it with the O-CU/O-DU we already run on ARA, then driving the field campaigns that will tell us how the new devices behave outside the lab. There's a tight loop here with ACCoRD: the integration tooling we built there is what makes these deployments possible at all.

## Why it matters

If energy-efficient mMIMO O-RUs work, they unlock rural and underserved deployments where a power budget can be the difference between coverage and no coverage. That's the line I'm trying to push.

## Selected publications

{% bibliography --query @*[key^=islam2023aramimo]|@*[key^=islam2025ara] %}
