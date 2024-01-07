
const linksData = [
    { name: 'Previous Sem Imp!', url: 'https://0gaurav4.github.io/mysgrown/notes.html' },
    { name: 'MCADS 23-24 Calender', url: 'https://drive.google.com/file/d/1BrKswwzFVmdLZXw2WxkS4g1Io0GIlYWC/view?usp=drive_link' },
    { name: 'MCADS 23-24 Syllabus', url: 'https://drive.google.com/file/d/1BdXRfSNzFpdwaeHL0sz-ba10SGGgUidW/view?usp=drive_link' },
    { name: 'MCADS 23-24 Exam & Enrollment', url: 'http://103.85.141.226:8063/bbduexamcell/' },
    { name: 'MCADS 23-24 Result Main/COP', url: 'https://bbdu.ac.in/result/' },
    { name: 'MCADS 23-24 More Details!', url: 'https://0gaurav4.github.io/mysgrown/academics.html' },
    { name: 'MCADS 23-24 Holiday List', url: 'https://bbdu.ac.in/notices/' },
    { name: 'MCADS 23-24 Project', url: 'https://0gaurav4.github.io/Check-Your-Project-Popularity/blogs.html' },
    { name: 'MCADS 23-24 Degree and Docs!', url: 'https://wa.me/c/919170884817' },
  ];
  
  // Function to create link elements
  function createLinkElement(link) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.textContent = link.name;
    linkElement.className = 'link-item';
    linkElement.target = '_blank';
    return linkElement;
  }
  
  // Function to render links
  function renderLinks(links) {
    const linksContainer = document.getElementById('linksContainer');
    links.forEach(link => {
      const linkElement = createLinkElement(link);
      linksContainer.appendChild(linkElement);
    });
  }
  
  function updateVisitorCount() {
    let count = parseInt(getCookie('visitorCount')) || 0;
    count++;
    setCookie('visitorCount', count, 365); // Set cookie for 1 year
    document.getElementById('visitorCount').textContent = count;
  }
  
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
  function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
  }
  
  window.addEventListener('load', () => {
    renderLinks(linksData);
    updateVisitorCount();
    const savedCount = parseInt(getCookie('visitorCount')) || 0;
    document.getElementById('visitorCount').textContent = savedCount;
  });

  window.watsonAssistantChatOptions = {
    integrationID: "0eb3456f-dba8-4102-a8ff-1ca9a13ca653", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "0bc95a87-3be7-4fec-ba6a-846986687d76", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

  