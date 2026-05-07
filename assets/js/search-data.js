// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-story",
          title: "Story",
          description: "how I got here, and what I&#39;m trying to do",
          section: "Navigation",
          handler: () => {
            window.location.href = "/story/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Three federally funded efforts I currently lead or co-lead, each a piece of the same problem — making next-generation wireless useful in the places that need it most.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed papers, demos, and preprints, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A web copy of my CV. The most up-to-date PDF is one click away — use the download button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-why-i-started-writing-here",
        
          title: "Why I started writing here",
        
        description: "A short note on what this blog will be, and what it won&#39;t.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hello/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-armored-a-10m-ntia-project-on-energy-efficient-mmimo-o-ran-kicked-off-with-skylark-wireless-and-eridan-inc",
          title: 'ArMORED, a $10M NTIA project on energy-efficient mMIMO O-RAN, kicked off with Skylark...',
          description: "",
          section: "News",},{id: "news-the-ara-wireless-living-lab-paper-appeared-in-computer-networks-it-documents-the-full-design-and-deployment-of-the-testbed",
          title: 'The ARA Wireless Living Lab paper appeared in Computer Networks. It documents the...',
          description: "",
          section: "News",},{id: "news-our-paper-ararach-enhancing-nextg-random-access-reliability-won-the-best-paper-award-at-ieee-netsoft-2025",
          title: 'Our paper “AraRACH: Enhancing NextG Random Access Reliability” won the Best Paper Award...',
          description: "",
          section: "News",},{id: "news-received-the-gpss-research-excellence-award-for-2026-from-the-isu-graduate-and-professional-student-senate",
          title: 'Received the GPSS Research Excellence Award for 2026 from the ISU Graduate and...',
          description: "",
          section: "News",},{id: "news-received-the-isu-graduate-college-research-excellence-award-for-2026",
          title: 'Received the ISU Graduate College Research Excellence Award for 2026.',
          description: "",
          section: "News",},{id: "news-joined-wici-as-research-assistant-professor-continuing-work-on-open-ran-mmimo-and-rural-broadband-across-the-ara-accord-and-armored-projects",
          title: 'Joined WiCI as Research Assistant Professor. Continuing work on Open RAN, mMIMO, and...',
          description: "",
          section: "News",},{id: "projects-accord",
          title: 'ACCoRD',
          description: "A $42M NTIA-funded effort to make Open RAN deployable in the real world",
          section: "Projects",handler: () => {
              window.location.href = "/projects/accord/";
            },},{id: "projects-ara-wireless-living-lab",
          title: 'ARA Wireless Living Lab',
          description: "A $16M NSF PAWR testbed for advanced wireless research and rural broadband",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ara/";
            },},{id: "projects-armored",
          title: 'ArMORED',
          description: "A $10M NTIA project on energy-efficient massive MIMO Open RAN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/armored/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Islam_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%73%6C%61%6D@%69%61%73%74%61%74%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4155-5064", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TrCMVtUAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/taimoor-islam", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tislam93", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/tislam93", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
