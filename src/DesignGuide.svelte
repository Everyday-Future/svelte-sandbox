<script>
    import {scroll_y} from "./stores";
    import DynamicSVG from "./Components/SVG/DynamicSVG.svelte";
    import ImageLoader from "./Components/Image/Image.svelte";
    import ButtonPicker from "./Components/Inputs/PathwayButton.svelte";
    import StatsCounter from "./Components/StatsCounter.svelte";
    import LayoutButton from "./Components/Buttons/LayoutButton.svelte";
    import StarRating from "./components/Inputs/StarRating/StarRating.svelte";

    const star_config = {
        fullColor: '#FFD700',
        emptyColor: '#fff',
        size: 13,
        showText: false,
    };

</script>

<div class="container">


  <h1>h1 Typography</h1>
  <h1>h1 Typography</h1>

  <!-- start slipsum code -->
  <p>
    <strong>You think water moves fast?</strong> You should see ice. It moves like it has a mind.
    Like it knows it killed the world once
    and got a taste for murder. <em>After the avalanche, it took us a week to climb out.</em>
    Now, I don't know exactly when we turned on each other,
    <code>but I know that seven of us survived the slide...</code> and only five made it out.
    Now we took an oath, that I'm breaking now.
    We said we'd say it was the snow that killed the other two, but it wasn't.
    Nature is lethal <a href="#">but it doesn't hold a candle to man.</a>
  </p>
  <p>
    <strong>You think water moves fast?</strong> You should see ice. It moves like it has a mind.
    Like it knows it killed the world once
    and got a taste for murder. <em>After the avalanche, it took us a week to climb out.</em>
    Now, I don't know exactly when we turned on each other,
    <code>but I know that seven of us survived the slide...</code> and only five made it out.
    Now we took an oath, that I'm breaking now.
    We said we'd say it was the snow that killed the other two, but it wasn't.
    Nature is lethal <a href="#">but it doesn't hold a candle to man.</a>
  </p>

  <h2>h2 Ordered Lists</h2>
  <h2>h2 Ordered Lists</h2>

  <ol>
    <li>Do you see any Teletubbies in here?</li>
    <li>Do you see a slender plastic tag clipped to my shirt with my name printed on it?</li>
  </ol>

  <h3>h3 blockquote</h3>
  <h3>h3 blockquote</h3>

  <blockquote><p>
    Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter
    that shakes when you put quarters in it? No?
    Well, that's what you see at a toy store.
  </p></blockquote>

  <h4>h4 unordered list</h4>
  <h4>h4 unordered list</h4>

  <ul>
    <li>Well, that's what you see at a toy store.</li>
    <li>And you must think you're in a toy store, because you're here shopping for an infant named Jeb.</li>
  </ul>

  <h5>Header Level 5</h5>
  <h5>Header Level 5</h5>
  <h6>Header Level 6</h6>
  <h6>Header Level 6</h6>

  <h1>Forms</h1>

  <form action="#" method="post">
    <div>
      <label for="name">Text Input:</label>
      <input type="text" name="name" id="name" value="" tabindex="1"/>
    </div>

    <div>
      <h4>Radio Button Choice</h4>

      <label for="radio-choice-1">Choice 1</label>
      <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1"/>

      <label for="radio-choice-2">Choice 2</label>
      <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2"/>
    </div>

    <div>
      <label for="select-choice">Select Dropdown Choice:</label>
      <select name="select-choice" id="select-choice">
        <option value="Choice 1">Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
      </select>
    </div>

    <div>
      <label for="textarea">Textarea:</label>
      <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
    </div>

    <div>
      <label for="checkbox">Checkbox:</label>
      <input type="checkbox" name="checkbox" id="checkbox"/>
    </div>

    <div>
      <input type="submit" value="Submit"/>
    </div>
  </form>


  <h1>Custom Components</h1>
  <h3>Optimized Image Loader</h3>
  <ImageLoader src="https://blog.luminaryhandbook.com/desk-banner-d-1000.jpg" alt="top banner"/>

  <h3>Optimized SVG Component</h3>
  <DynamicSVG/>


  <div>
    <h3>Pathway Picker</h3>
    <ButtonPicker/>
  </div>

  <div>
    <h3>Stats Counter</h3>
    <StatsCounter/>
  </div>

  <div>
    <h3>Custom Layout Button</h3>
    <LayoutButton/>
  </div>

  <div>
    <h3>Star Rating</h3>
    <StarRating rating={3.35} config={star_config}/>
  </div>

</div>






