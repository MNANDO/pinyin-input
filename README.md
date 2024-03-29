<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
# Pinyin Input for Anki

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#setup">Setup</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About 

![example](./images/example.gif)

This is an Anki card script that is meant to allow the user to type in pinyin and get feedback based on the answer of the card. 

<!-- GETTING STARTED -->
## Getting Started

You will need to have at least Anki 2.1.35 installed in order for everything to run smoothly (This script has not been tested on earlier versions).

### Setup

1. You will need the following fields in your anki cardtype
 - pinyin
2. Copy the following HTML into the front of your Anki card
  ```
    <div id="answer" class="answer">ANSWER GOES HERE</div>
      <div class="container">
          <div class="output"id="output">
              <div class="message" id="message">Click here to start typing...</div>
          </div>
          <button class="submit" id="submit">Check Pinyin</button>
      </div>
    <div class="dummy-input"><input type="text" id="input"></div>
    <script></script>
  ```
3. Where it says "ANSWER GOES HERE" in the HTML put {{pinyin}} or whatever you are trying to compare the input to. 
4. In the style part of your anki card, copy and paste the style.css into that section. 
5. Finally, on the front of the card, copy the script from the main.js file in between the <script> tags in the html. 
6. Good luck with your studies! 






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
