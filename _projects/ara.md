---
layout: page
title: ARA Wireless Living Lab
description: A $19M NSF PAWR testbed for advanced wireless research and rural broadband
img: assets/img/projects/ara.png
importance: 1
category: current
related_publications: false
permalink: /projects/ara/
---

**Role.** Wireless network lead, 2021 – present.
**Funding.** $19M, NSF Platforms for Advanced Wireless Research (PAWR).
**Partners.** Iowa State University, USDA, partner farms and rural communities across central Iowa.

## What it is

ARA is one of four NSF PAWR platforms in the United States and the only one focused on **rural** wireless. It's a working living lab (a real wireless network spanning farms, labs, and rural towns around Ames, Iowa) that researchers use to run experiments on the same infrastructure that delivers broadband to actual residents and farms. The two roles aren't separable: experiments only count if the network keeps working for the people who depend on it.

## What I did

I designed and deployed the network end-to-end. That meant choosing equipment for multi-scale and multi-dimensional use cases, planning and installing routers, switches, servers, radios, antennas, and cabling, working directly with vendors and contractors through rollout, and standing up the OpenStack-based control plane that lets external researchers reserve resources and run their own experiments. Once the testbed was live, I led the Skylark Wireless mMIMO deployment and built it into a research platform for URLLC, massive MIMO, and rural broadband studies, including the publicly available [AraMIMO](https://gitlab.com/aralab1/AraMIMO) repo of APIs that other groups can use to run PHY/MAC experiments without rebuilding the stack.

## Why it matters

Most wireless research happens in lab conditions or in dense urban deployments. Rural environments break the usual assumptions: long distances, terrain, sparse infrastructure, real users on the line. ARA exists so that the next generation of wireless protocols and Open RAN designs gets tested where it actually has to work.

## Recognition

The work behind ARA has won three Best Paper / Demo / Honorable Mention awards at IEEE NetSoft 2025, ACM WiNTECH 2023, MERIF 2024, and IEEE FNWF 2023. See the [publications](/publications/) page for the full list.

## Selected publications

{% bibliography --query @*[key^=islam2025ara]|@*[key^=islam2023arapawr]|@*[key^=islam2024merif]|@*[key^=islam2024icnp]|@*[key^=islam2023aramimo] %}
