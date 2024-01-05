
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
  
  // Render links when the page loads
  window.addEventListener('load', () => {
    renderLinks(linksData);
  });
  