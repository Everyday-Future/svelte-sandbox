<script>
    import WorksCitedCard from "../components/Cards/WorksCitedCard.svelte";

    export let citations = [{
        "idx": "107",
        "category": "Development",
        "title": "How To Cope Under Pressure, According To Psychology",
        "summary": "Getting clutch performance under pressure. Strategies for dealing with high-pressure situations",
        "authors": "Emma Young",
        "source": "Research Digest",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://digest.bps.org.uk/2019/09/17/how-to-cope-under-pressure-according-to-psychology/",
        "Summary": null
    }, {
        "idx": "108",
        "category": "Development",
        "title": "7 Proven and Practical Emotional Regulation Skills & Techniques",
        "summary": "Ways to reappraise thoughts that you have while you're in an emotional state and understand your reactions better",
        "authors": "Aditya Shukla",
        "source": "Cognition Today",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://cognitiontoday.com/2019/07/7-proven-and-practical-emotional-regulation-skills-techniques-how-to/",
        "Summary": null
    }, {
        "idx": "109",
        "category": "Sleep",
        "title": "Sleeping too much\u2014or too little\u2014boosts heart attack risk",
        "summary": "Based on a study of 500,000 people",
        "authors": "Lisa Marshall",
        "source": "CU Boulder Today",
        "Full Text?": "FALSE",
        "Cited?": "",
        "link": "https://www.colorado.edu/today/2019/09/02/sleeping-too-much-or-too-little-boosts-heart-attack-risk",
        "Summary": null
    }, {
        "idx": "110",
        "category": "Development",
        "title": "When False Claims Are Repeated, We Start To Believe They Are True",
        "summary": "How Behaving Like A Fact-Checker Can Help",
        "authors": "Matthew Warren",
        "source": "Research Digest",
        "Full Text?": "FALSE",
        "Cited?": "",
        "link": "https://digest.bps.org.uk/2019/09/12/when-false-claims-are-repeated-we-start-to-believe-they-are-true-heres-how-behaving-like-a-fact-checker-can-help/",
        "Summary": null
    }, {
        "idx": "111",
        "category": "Self-Care",
        "title": "Seven Early Experiences with Potential Benefits in Adulthood",
        "summary": "(1) Talk with family members about their feelings, (2) Feel that their families stood by them during difficult times, (3) Enjoy participating in community traditions, (4) Feel a sense of belonging in high school, (5) Feel supported by friends, (6) Have at least two non-parent adults who take genuine interest in them, and (7) Feel safe and protected by an adult in their home.",
        "authors": "Christina Bethell",
        "source": "JAMA Pediatrics",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2749336",
        "Summary": "https://www.psychologytoday.com/au/blog/the-athletes-way/201909/seven-early-experiences-potential-benefits-in-adulthood"
    }, {
        "idx": "112",
        "category": "Development",
        "title": "Why People Procrastinate: The Psychology and Causes of Procrastination",
        "summary": "When we need to get something done, we rely primarily on our self-control in order to bring yourself to do it.Our self-control often receives support from our motivation, which helps us get things done in a timely manner.",
        "authors": "uncredited",
        "source": "Solving Procrastination",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://solvingprocrastination.com/why-people-procrastinate/",
        "Summary": null
    }, {
        "idx": "113",
        "category": "Exercise",
        "title": "Exercise may protect brain regions that are sensitive to neurodegeneration",
        "summary": "Physical activity and fitness reflect on brain structure in cognitive decline. Especially brain regions which are affected by neurodegeneration seem to be responsive to exercise and fitness, Reetz and Haeger told PsyPost.",
        "authors": "Alexa Haeger, Ana S. Costa, J\u00f6rg B. Schulz, and Kathrin Reetz",
        "source": "NeuroImage: Clinical",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.sciencedirect.com/science/article/pii/S2213158219302839",
        "Summary": "https://www.psypost.org/2019/09/exercise-may-protect-brain-regions-that-are-sensitive-to-neurodegeneration-54394"
    }, {
        "idx": "114",
        "category": "Development",
        "title": "Psychiatric Diagnoses Found to Be Scientifically Meaningless",
        "summary": "Professor Peter Kinderman, University of Liverpool, said: This study provides yet more evidence that the biomedical diagnostic approach in psychiatry is not fit for purpose. Diagnoses frequently and uncritically reported as \u2018real illnesses\u2019 are in fact made on the basis of internally inconsistent, confused and contradictory patterns of largely arbitrary criteria. The diagnostic system wrongly assumes that all distress results from disorder, and relies heavily on subjective judgments about what is normal.",
        "authors": "Kate Allsopp, John Read, Rhiannon Corcoran, Peter Kinderman",
        "source": "Psychiatry Research",
        "Full Text?": "FALSE",
        "Cited?": "",
        "link": "https://www.technologynetworks.com/neuroscience/news/psychiatric-diagnoses-found-to-be-scientifically-meaningless-321555",
        "Summary": null
    }, {
        "idx": "115",
        "category": "Social",
        "title": "Manipulation: The Costs Outweigh the Benefits",
        "summary": "The tendency to avoid facing unpleasant truths about ourselves is strong in us all. Doing so can activate feelings of shame, humiliation, and guilt. Yet in coming to terms with these deeper feelings we can become more able to have a heightened experience of authenticity, intimacy, freedom, and passion.",
        "authors": "Linda and Charlie Bloom",
        "source": "Psychology Today",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.psychologytoday.com/gb/blog/stronger-the-broken-places/201908/manipulation-the-costs-outweigh-the-benefits",
        "Summary": null
    }, {
        "idx": "116",
        "category": "Development",
        "title": "Believing You Get What You Work for Can Destroy Compassion",
        "summary": "Those who commit the Just-World Fallacy are more likely to victim-blame.",
        "authors": "Veronika Tait Ph.D.",
        "source": "Psychology Today",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.psychologytoday.com/us/blog/pulling-through/201908/believing-you-get-what-you-work-can-destroy-compassion",
        "Summary": null
    }, {
        "idx": "117",
        "category": "Self-Care",
        "title": "Social media, but not video games, linked to depression in teens, according to Montreal study",
        "summary": "The researchers studied the behaviour of over 3,800 young people from 2012 until 2018. They recruited adolescents from 31 Montreal schools and followed their behaviour from Grade 7 until Grade 11.",
        "authors": "Patricia Conrod and Elroy Boers",
        "source": "The Info Radar",
        "Full Text?": "FALSE",
        "Cited?": "",
        "link": "https://www.theinforadar.com/2019/08/social-media-but-not-video-games-linked.html?m=1",
        "Summary": null
    }, {
        "idx": "118",
        "category": "Learning",
        "title": "A Growth Mindset Intervention Can Change Students\u2019 Grades if School Culture is Supportive",
        "summary": "an intervention emphasizing a growth mindset \u2014 the belief that intellectual abilities are not fixed but can be developed \u2014 can improve key predictors of high school graduation and college success, especially when a school\u2019s culture supports the treatment message.",
        "authors": "David S Yeager et al",
        "source": "Nature",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.nature.com/articles/s41586-019-1466-y",
        "Summary": "https://news.utexas.edu/2019/08/07/a-growth-mindset-intervention-can-change-students-grades-if-school-culture-is-supportive/"
    }, {
        "idx": "119",
        "category": "Development",
        "title": "Fake news game confers psychological resistance against online misinformation",
        "summary": "A game was created to teach people about common propaganda techniques and it was effective at helping them spot fake news in further tests",
        "authors": "Jon Roozenbeek & Sander van der Linden",
        "source": "Nature",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.nature.com/articles/s41599-019-0279-9",
        "Summary": null
    }, {
        "idx": "120",
        "category": "Development",
        "title": "Petal Power: Why Is Gardening So Good For Our Mental Health?",
        "summary": "Benefits of tending a garden on our mental wellbeing ",
        "authors": "Sarah Rayner",
        "source": "Psychology Today",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.psychologytoday.com/us/blog/worry-and-panic/201505/petal-power-why-is-gardening-so-good-our-mental-health",
        "Summary": null
    }, {
        "idx": "121",
        "category": "Development",
        "title": "Community gardens help kids grow healthy habits, leadership skills",
        "summary": "Evidence for real life benefits of urban gardening programs in Canadian inner cities",
        "authors": "Ben Cousins",
        "source": "The Canadian Press",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.ctvnews.ca/lifestyle/community-gardens-help-kids-grow-healthy-habits-leadership-skills-1.2678163",
        "Summary": null
    }, {
        "idx": "122",
        "category": "Development",
        "title": "Growing Community Through Milwaukee Urban Gardens",
        "summary": "Evidence of positive effects on inner city youths and communities and the diverse nature of their implementation based on a neighborhood's particular needs",
        "authors": "Groundwork USA",
        "source": "Groundwork USA",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://groundworkusa.org/profile/growing-community-milwaukee-urban-gardens/",
        "Summary": null
    }, {
        "idx": "123",
        "category": "Development",
        "title": "Can Gardening Help Troubled Minds Heal?",
        "summary": "Doctors and researchers are examining whether gardening can lessen symptoms of anxiety, depression and PTSD",
        "authors": "Kristofor Husted",
        "source": "The Salt",
        "Full Text?": "TRUE",
        "Cited?": "",
        "link": "https://www.npr.org/sections/thesalt/2012/02/17/147050691/can-gardening-help-troubled-minds-heal",
        "Summary": null
    }];
    export let categories = [
        "Cessation",
        "Development",
        "Exercise",
        "Finance",
        "Goals"
    ];
    let selectedCategories = ["Development"];

    function removeCategory(catName) {

    }
</script>

<div class="works-cited-header">
  <h1 class="header-title">TODO - Works Cited Header</h1>
</div>

<div class="container">
  <div class="">
    <div class="">
      <form action="#">
        <fieldset>
          <label class="" for="filter">Filter by:</label>
          <select class="select-menu m-0" style="color: var(--navy)" name="filter" id="filter" onchange="add_filter();">
            {#each categories as category}
              <option>{category}</option>
            {/each}
          </select>
        </fieldset>
        <fieldset>
          <label class="" for="filter">Search by index or keyword:</label>
          <input class="" type="text" name="search" id="search"
                 value="" onchange="search();">
        </fieldset>
      </form>
    </div>
    <div class="">
      <p class="">Selected:</p>
      <div class="" id="categories">
        {#each selectedCategories as category}
          <div id="cat-{category}" class="mod-button align-middle">
            {category}
            <svg on:click={removeCategory(category)} width="1.6rem" height="1.6rem" viewBox="0 0 16 16"
                 class="bi bi-x align-middle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="card-columns">
    {#each citations as citation}
      <div class="card">
        <WorksCitedCard {...citation}/>
      </div>
    {/each}
  </div>
</div>

<style>

  .works-cited-header {
    text-align: center;
    height: 200px;
    width: 100%;
    background-color: #4c5559;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-title {
    color: white;
    flex: 1 1 0;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
    margin: 20px 0;
  }

  @media (min-width: 576px) {
    .card-columns {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      -webkit-column-gap: 1.25rem;
      -moz-column-gap: 1.25rem;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1
    }
  }
</style>


