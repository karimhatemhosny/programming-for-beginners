const menuContent = `
<ul>
    <li class='dd-list'><a href="../index.html">Home</a></li>
    <li class="dropdown dd-list">
        <a href="javascript:void(0)" class="dropbtn">HTML</a>
        <div class="dropdown-content">
            <div class="row">
                <div class="column">
                    <a href="label and input.html">Label and input</a>
                    <a href="../html/link.html">Links</a>
                    <a href="../html/lists.html">Lists</a>
                    <a href="../html/classes and ids.html">Classes and ids</a>
                    <a href="../html/divs and spans.html">Divs and Spans</a>
                    <a href="../html/comments.html">Comments</a>
                </div>
                <div class="column">
                    <a href="../html/iframes.html">Iframes</a>
                    <a href="../html/headings.html">Headings</a>
                    <a href="../html/buttons.html">Buttons</a>
                    <a href="../html/text decoration.html">Text decoration</a>
                    <a href="../html/images and videos.html">Images and Videos</a>
					<a href='../html/pre.html'>Pre</a>
                </div>
            </div>
        </div>
    </li>
    <li class="dropdown dd-list">
        <a href="javascript:void(0)" class="dropbtn">CSS</a>
        <div class="dropdown-content">
            <div class="column">
                <a href="../css/">Padding, Border and Margin</a>
            </div>
        </div>
    </li>
    <li class="dropdown dd-list">
        <a href="javascript:void(0)" class="dropbtn">How to</a>
        <div class="dropdown-content">
        <div class="column">
            <a href="../how to/favicon.html">Add a Favicon</a>
            <a href="../how to/loader.html">Make a loader</a>
        </div>
        <div class="column">
            <a href="../how to/fixed sidebar.html">Make a fixed sidebar</a>
        </div>
        </div>
    </li>

</ul>
`;

const menu = document.querySelector('.menu');

menu.innerHTML = menuContent;

