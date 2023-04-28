const fetchJobOpenings = () => {
  const jobDiv = document.getElementById("unison-job-openings");
  const placeholder = document.getElementById("unison-placeholder");

  if (!jobDiv) {
    console.error(
      'Please add an element with this specific id: "unison-job-openings"'
    );
  }

  try {
    fetch("https://api.ashbyhq.com/posting-api/job-board/UNISON")
      .then((res) => res.json())
      .then((data) => {
        data.jobs.forEach((job) => {
          const element = document.createElement("h2");
          const jobParagraph = document.createElement("h2");
          const link = document.createElement("a");
          const span = document.createElement("span");
          const br = document.createElement("br");
          const br2 = document.createElement("br");

          link.href = job.jobUrl;
          link.target = "_blank";
          link.innerText = "→ Read More";
          link.style.color = "#ffce00";
          link.style.fontWeight = "normal";
          span.style.color = "#2e3192";
          jobParagraph.innerText = `${job.title}\nSan Francisco, CA / Mountain View, CA\n`;

          if (placeholder) {
            placeholder.remove();
          }

          span.appendChild(link);
          element.appendChild(jobParagraph);
          element.appendChild(br);
          element.appendChild(span);
          element.appendChild(br2);
          jobDiv.appendChild(element);
        });

        const scaffolding = document.querySelector(`[data-set="Scaffolding"]`);
        scaffolding.style.height = "unset";
      });
  } catch (e) {
    console.error(e.message);
  }
};

const observeUrlChange = () => {
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (
        oldHref !== document.location.href &&
        document.location.href.search("careers")
      ) {
        oldHref = document.location.href;
        fetchJobOpenings();
      }
    });
  });
  observer.observe(body, { childList: true, subtree: true });
};

addEventListener("load", observeUrlChange);
addEventListener("load", fetchJobOpenings);
