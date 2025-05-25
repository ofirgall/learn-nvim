// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="chapters/00-why-should-i-learn.html"><strong aria-hidden="true">1.</strong> Why Should I Learn?</a></li><li class="chapter-item expanded "><a href="chapters/01-the-vim-language.html"><strong aria-hidden="true">2.</strong> The vim Language</a></li><li class="chapter-item expanded "><a href="chapters/02-basic-config.html"><strong aria-hidden="true">3.</strong> Basic Configuration</a></li><li class="chapter-item expanded "><a href="chapters/03-movements-and-operators.html"><strong aria-hidden="true">4.</strong> Movements and Operators</a></li><li class="chapter-item expanded "><a href="chapters/04-copy-paste-visual.html"><strong aria-hidden="true">5.</strong> Copy, Paste and Visual Mode</a></li><li class="chapter-item expanded "><a href="chapters/05-text-objects.html"><strong aria-hidden="true">6.</strong> Text objects</a></li><li class="chapter-item expanded "><a href="chapters/06-splits-and-actual-tabs.html"><strong aria-hidden="true">7.</strong> Splits and Actual Tabs</a></li><li class="chapter-item expanded "><a href="chapters/07-vim-goodies.html"><strong aria-hidden="true">8.</strong> Vim Goodies</a></li><li class="chapter-item expanded "><a href="chapters/08-advanced-config.html"><strong aria-hidden="true">9.</strong> Advanced Configuration</a></li><li class="chapter-item expanded "><a href="chapters/09-ui.html"><strong aria-hidden="true">10.</strong> UI</a></li><li class="chapter-item expanded "><a href="chapters/10-code-navigation.html"><strong aria-hidden="true">11.</strong> Code Navigation</a></li><li class="chapter-item expanded "><a href="chapters/11-complete-engine.html"><strong aria-hidden="true">12.</strong> Complete and Snippets Engines</a></li><li class="chapter-item expanded "><a href="chapters/12-git.html"><strong aria-hidden="true">13.</strong> Git</a></li><li class="chapter-item expanded "><a href="chapters/13-debug.html"><strong aria-hidden="true">14.</strong> Debug</a></li><li class="chapter-item expanded "><a href="chapters/14-hydra.html"><strong aria-hidden="true">15.</strong> Hydra</a></li><li class="chapter-item expanded "><a href="chapters/15-misc-and-summary.html"><strong aria-hidden="true">16.</strong> Misc Plugins and Summary</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
