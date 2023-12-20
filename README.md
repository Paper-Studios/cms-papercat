# Promotional Website with React Bricks as a CMS

A Content Management System (CMS) benefits clients by enabling easy, user-friendly content updates without requiring any technical expertise. It also benefits developers who want to control what a client can manipulate without breaking responsiveness and will maintain integrity of the UI design.
While Wix, SquareSpace, and Wordpress may come to mind when thinking about a CMS, [React Bricks](https://reactbricks.com) offers a unique and fully customizable alternative that uses plain React components and CSS modules inside both a front-end and admin dashboard.

# About Paper Cat Games
Paper Cat Games is a professional video game studio launching their debut game, "Paper Perjury," a detective mystery targeting teens and adults. The studio aims to be self-funded, creating games that reward clever thinking and delve into social issues. With a long-term vision of releasing a new game every 2-3 years while maintaining independence, Paper Cat Games values diverse community feedback to enhance their products. <br><br>
See the initial deployment of their website [here](https://admirable-clafoutis-124804.netlify.app)

## Team Members
CMS Creator:
- [Rachel Miller](https://github.com/rkmiller131)<br>

React App Contributors:
- [Jin Myeong "Fox" Seo](https://github.com/yoko-8)
- [Naru Sadakuni](https://github.com/nsadakuni)
- [Ethan Pinsker](https://github.com/EthanPin)

## 📁 Tech Stack
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![ReactBricks](https://github.com/rkmiller131/cms-papercat/assets/21061780/efeef154-c107-4ec6-a8bb-b65061002d1c)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

---
## 🚧 Building through the Admin Interface

The admin interface sits inside the frontend project as a dedicated route leading to a secure login page. Following successful authentication, admins gain access to modify both content and layout aspects of individual components, referred to as "bricks", on the page. These modifications, facilitated either directly within the page or through the sidebar controls, are props that get dynamically passed to each corresponding React component, thereby allowing for granular and efficient customization.

https://github.com/rkmiller131/cms-papercat/assets/21061780/aea7f379-30fa-409e-9488-661253b1156b


## 📖 Documentation
### Entities:
**Navbar**<br>
- Located in `Entities` under `Layout` -> `Header`, the social links for Discord, Twitter, and Steam can be edited.<br><br>

![Navbar](https://github.com/rkmiller131/cms-papercat/assets/21061780/8c227233-cf09-4b0d-ae33-267fa93c9c44)

**Footer**<br>
- Located in `Entities` under `Layout` -> `Footer`, the default footer has standard, editable text blocks.<br><br>

![Footer](https://github.com/rkmiller131/cms-papercat/assets/21061780/46d5e3e1-f2b0-4c66-afe8-d60a67c70fc8)

However, if you would like to change the columns completely, this is also possible by clicking on the column, and `Remove` on the sidebar controls. 
There can be up to 4 columns, and each column can have up to 3 fields:
- text
- links
- buttons<br><br>

https://github.com/rkmiller131/cms-papercat/assets/21061780/6c64cc75-1a06-4d2c-b3e0-ce0a03944409

### Pages:<br><br>
Each tab on the Navbar corresponds to a page in the admin interface, and the naming of each page corresponds to the url route created in the browser. For example, creating a page called `Games` will route to:
`/games`<br><br>

**Home Page**<br>
- Located in `Pages` -> `Pages` -> `Home`, to remove the currently constructed Home Page, click on the purple background and the trash can icon on the top right. From here you can press, `Add your first block` and select a fresh Home Page under the `Hero Section` from the sidebar controls.
- By default, some content will already appear as a template with some gaps: images, for example, need to be uploaded, and content in between the titles is bare.
- To change the layout entirely, each block can be deleted and new entries can be created.
- Each Entry, added through the sidebar controls under 'ADD NEW...' `Section Entry`, has a specific pattern of repeatable bricks, in this order:
    - Title Ribbon
    - Image Pair
    - Paragraph
    - Steam Box
- While the order of each individual brick inside a single entry can't be changed, if the layout requires two paragraphs stacked together, or a steam box before an image pair, then simply create two entries with only the desired block inside (so one entry with just a steam box, and another entry with just an image pair)<br><br>

https://github.com/rkmiller131/cms-papercat/assets/21061780/9fc808a4-410d-4277-b17e-e00a27094fe6

**Team Page**<br>
- Located in `Pages` -> `Pages` -> `Team`, the default layout includes an editable main title, team description, secondary title, and team member card.
- An unlimited number of team member cards can be added from the sidebar controls under 'ADD NEW...' `Team Member` <br><br>

**Games Page**<br>
- Located in `Pages` -> `Pages` -> `Games`, the layout for the Games Page in the admin interface is slightly different than the final version seen on the user interface. The reason for this is due to the styling of the Game Cards: In the `user interface`, the images appear as a background image. However in order to be clicked on and uploaded on the `admin interface`, the Game Cards are regular images with a stretched appearance. While this could be refactored for a more appealing admin interface in the future, just know that the final client-facing view will appear with the correct styling.
- **IMPORTANT**: Though not directly visible on the page, each game card has data associated with it that will be revealed when a client-side user clicks on a card. This information must be filled out on the sidebar controls in order to be visible.

![Games](https://github.com/rkmiller131/cms-papercat/assets/21061780/cc03808c-d1a4-4d10-bfdc-09792c55847e)
<br><br>

**Blog Page**<br>
- Located in `Pages` -> `Blog`, this dropdown displays all current blog posts as individual pages. To create a new article, click the `Add New` page icon. From here you can create your own content with a selection of background colors for a main title, big image, and paragraphs. See the video below for additional styling options such as padding adjustments and dividing borders.<br><br>


https://github.com/rkmiller131/cms-papercat/assets/21061780/cedd2329-6e66-4c17-8742-2e00ed334e22

- **IMPORTANT:** Blog entry cards that the user sees (before clicking and viewing the article you just created) need an additional step from the admin. `You must enter a featured image and SEO data on the current page`.<br><br>
<div align="center">
    <img width="276" alt="BlogSEO" src="https://github.com/rkmiller131/cms-papercat/assets/21061780/c24e2bd3-e712-46d2-9c2b-169618974492">
</div>

**Contact Page**<br>
- Located in `Pages` -> `Pages` -> `Contact`, the lefthand image next to the Contact form can be changed with a new upload. Form submission is handled by a third party and templates for email auto-replies can be modified through their service. See [Email.js](https://www.emailjs.com/) for more information.<br>

**Press Kit Page**<br>
- Located in `Pages` -> `Pages` -> `Presskit`, to remove the currently constructed Press Kit Page, click on the purple background and the trash can icon on the top right. From here you can press, `Add your first block` and select a fresh Home Page under the `Presskit Section` from the sidebar controls.
- By default, some content will already appear as a template. Images will need to be uploaded.
- To change the layout entirely, each block can be deleted and new entries can be created.
- Each Entry, added through the sidebar controls under 'ADD NEW...' `Entry`, has a specific pattern of repeatable bricks, in this order:
    - Paragraph
    - Game Image
- Titles for each new Entry are added automatically, but simply deleting the text will eliminate them on the user-facing client.
- Images can be clicked, which will open up their full resolution in another tab in the browser (webp format). From here, users can right click and save the image to their own computer.



https://github.com/rkmiller131/cms-papercat/assets/21061780/04e156b4-f95a-45be-83bd-b6b0f0c18a5a


<br>
---
    
## 📖 React Bricks Documentation
Please, read the official documentation at [Reactbricks.com](https://reactbricks.com).
