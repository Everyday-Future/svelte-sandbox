<script>
    import ShopBanner from "../components/Banners/ShopBanner.svelte";
    import InfoBlock from "../components/InfoBlock.svelte";
    import Image from "../components/Image/Image.svelte";
    import {citation} from "../lib/helpers";

</script>


<ShopBanner/>

<!-- Journal -->
<div class="container my-5">
  <InfoBlock
    heading="Find the big picture"
    subheading="Luminary Journal"
    body="Explore self-discovery with themes like gratitude and self-care.
          Insights and writing prompts that help you keep your journaling fun, fresh and interesting!
        <ul>
          <li>3 months</li>
          <li>Inspiring content</li>
          <li>Custom prompts and themes</li>
          <li>Self-discovery themes</li>
        </ul>"
  >
    <a href="/customize/luminary-journal">
      <Image src='https://blog.luminaryhandbook.com/journal-doodles-1600.png' alt="journal book cover"/>
    </a>
  </InfoBlock>
</div>

<!-- Notebook -->
<div class="container my-5">
  <InfoBlock
    heading="As limitless as you are"
    subheading="Luminary Notebook"
    body="The ultimate hobbyist's notebook.
          Design your dream notebook with pages for writing, drawing, dotted/2D/3D grids, sheet music, recipes, and
          more!
        <ul>
          <li>180 pages</li>
          <li>Extremely versatile</li>
          <li>Creativity without borders</li>
          <li>Reflects your unique talents</li>
        </ul>"
  >
    <a href="/customize/luminary-notebook">
      <Image src='https://blog.luminaryhandbook.com/notebook-doodles-1600.png' alt="notebook book cover"/>
    </a>
  </InfoBlock>
</div>

<!-- Trainer -->
<div class="container my-5">
  <InfoBlock
    heading="Fill the gaps in your apps"
    subheading="Luminary Trainer"
    body="Designed for sports and exercise enthusiasts - track nutrition, workouts and record your progress.
          Choose from a variety of sports and create the perfect outline to achieve your fitness goals!
        <ul>
          <li>3 months</li>
          <li>Customizable to fit your routine</li>
          <li>Helps you stay focused and dedicated</li>
          <li>Great for athletes, coaches, and personal trainers</li>
        </ul>"
  >
    <a href="/customize/luminary-trainer">
      <Image src='https://blog.luminaryhandbook.com/trainer-doodles-1600.png' alt="trainer book cover"/>
    </a>
  </InfoBlock>
</div>

<!-- Muse -->
<div class="container my-5">
  <InfoBlock
    heading="Ignite your creativity"
    subheading="Luminary Muse"
    body="Access your creativity with this fun and diverse assortment of drawing activities!
          Timed challenges, multi-layered drawings, exploration challenges, prompts, and more!
        <ul>
          <li>Tons of activities</li>
          <li>Makes creativity accessible</li>
          <li>Fun and challenging</li>
          <li>Share and compare with your friends!</li>
        </ul>"
  >
    <a href="/customize/luminary-muse">
      <Image src='https://blog.luminaryhandbook.com/muse-doodles-1600.png' alt="muse book cover"/>
    </a>
  </InfoBlock>
</div>

<!-- Planner -->
<div class="container my-5">
  <InfoBlock
    heading="Put together your big picture"
    subheading="Luminary Planner"
    body="Design a clear and simple 3-month planner.
          Our easy-to-use customizer lets you make it your own with no wasted space!
        <ul>
          <li>3 months</li>
          <li>Custom page layouts</li>
          <li>Designed to be flexible and forgiving</li>
  </ul>"
  >
    <a href="/customize/luminary-planner">
      <Image src='https://blog.luminaryhandbook.com/planner-doodles-1600.png' alt="planner book cover"/>
    </a>
  </InfoBlock>
</div>


<div id="free-section" class="container m-auto" style="max-width: 600px">
  <h5 class="font-sharpie subheading-block mt-3">Free Products + Outreach</h5>
  <h2>Personal development for all.</h2>
  <p class="subheading color-navy">
    Our team is obsessed with finding the most effective tools and resources for people to create
    positive change in their lives. We believe in sharing what we have learned with anyone who
    wants to know.
    <br><br>
    That's why all of the products listed above feature <b>free, printable pdf versions</b>
    and all of the tools below are available for free. No registration. No hassle.
    Just download them and get started today!
  </p>
</div>


<!-- Habit Tracker -->
<div class="container my-5">
  <InfoBlock
    heading="every. single. day."
    subheading="Daily Habit Tracker"
    body="Get started today with this free downloadable Habit Tracker!
              Take the 30-day challenge and stay focused on positive habits
              as you build confidence on your terms.
              <br><br>
              Whether you are trying to drink more water, eat healthier meals,
              journal daily, or start exercising regularly, we've got you covered with this easy to use,
              at-a-glance worksheet."
  >
    <a href="/tools/habit-tracker">
      <Image src='https://blog.luminaryhandbook.com/habits_at_a_glance.jpg' alt="habit tracker printable"/>
    </a>
  </InfoBlock>
</div>

<!-- Daily Mood Tracker -->
<!--<div class="container my-5">-->
<!--  <InfoBlock-->
<!--    heading="easy introspection"-->
<!--    subheading="Daily Mood Tracker"-->
<!--    body="The first step in improving how you feel is observing and understanding it.-->
<!--          if you're looking to take a first step and get started today, print out this-->
<!--          daily tracker and start filling in the bubbles howver you'd like<br/><br/>-->

<!--          The hope is that as you see good days and bad days, you'll start to learn-->
<!--          what you can do to turn a bad day into a good day, and then to reduce the-->
<!--          number of bad days more and more until you don't need it anymore."-->
<!--  >-->
<!--    <a href="/tools/mood-tracker">-->
<!--      <Image src='https://www.fillmurray.com/640/360' alt="mood tracker printable"/>-->
<!--    </a>-->
<!--  </InfoBlock>-->
<!--</div>-->

<!-- SMART Goals -->
<div class="container my-5">
  <InfoBlock
    heading="clearly define your plan"
    subheading="SMART Goals Worksheet"
    body='S.M.A.R.T Goals are a popular and effective goal setting method.
              Our goal setting worksheet can help you plan and achieve your goals.
              It is a great companion to our <a href="/customize/luminary-planner">90 day planner</a> as well!
              <br><br>
              Studies show that more time spent planning and thinking about your goals can
              improve your performance and increase your likelihood of success.{ citation(221) }
              <br><br>
              Develop your abstract goal into a clear and focused mission!'
  >
    <a href="/tools/smart-goals">
      <Image src='https://blog.luminaryhandbook.com/SMART_Goals.jpg' alt="smart goals printable"/>
    </a>
  </InfoBlock>
</div>

<!-- Accountability Agreement -->
<div class="container my-5">
  <InfoBlock
    heading="better together"
    subheading="Accountability Agreement"
    body="Support from family and friends can be very helpful as you start to make
              lifestyle changes that positively impact your life and health.
              When you decide to pursue a new and difficult task, it can be helpful to have an
              accountability partner.
              <br><br>
              Studies show that it's harder to skip a workout when you have
              someone to hold you accountable.{ citation(187) }
              This Accountability Agreement is a tool to be clear about the changes that you want
              and to ask for the kind of support you need to make that change."
  >
    <a href="/tools/accountability-agreement">
      <Image src='https://blog.luminaryhandbook.com/AccountabilityAgreement.jpg'
             alt="accountability agreement printable"/>
    </a>
  </InfoBlock>
</div>

<style>

</style>


