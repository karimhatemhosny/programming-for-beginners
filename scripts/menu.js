const menuContent = `
<ul>
    <li><a href="../index.html">Home</a></li>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">HTML</a>
        <div class="dropdown-content">
            <div class="row">
                <div class="column">
                    <a href="label and input.html">Label and input</a>
                    <a href="link.html">Links</a>
                    <a href="lists.html">Lists</a>
                    <a href="classes and ids.html">Classes and ids</a>
                    <a href="divs and spans.html">Divs and Spans</a>
                    <a href="comments.html">Comments</a>
                </div>
                <div class="column">
                    <a href="iframes.html">Iframes</a>
                    <a href="headings.html">Headings</a>
                    <a href="buttons.html">Buttons</a>
                    <a href="text decoration.html">Text decoration</a>
                    <a href="images and videos.html">Images and Videos</a>
					<a href='pre.html'>Pre</a>
                </div>
            </div>
        </div>
    </li>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">CSS</a>
        <div class="dropdown-content">
            <div class="column">
                <a href="../css/">Padding, Border and Margin</a>
            </div>
        </div>
    </li>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">How to</a>
        <div class="dropdown-content">
        <div class="column">
            <a href="favicon.html">Add a Favicon</a>
            <a href="loader.html">Make a loader</a>
        </div>
        <div class="column">
            <a href="fixed sidebar.html">Make a fixed sidebar</a>
        </div>
        </div>
    </li>

</ul>
`;

const menu = document.querySelector('.menu');

menu.innerHTML = menuContent;

