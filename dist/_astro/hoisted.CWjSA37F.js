import"./Layout.astro_astro_type_script_index_0_lang.C5a_LS-D.js";document.addEventListener("DOMContentLoaded",function(){if(localStorage.getItem("adminLoggedIn")!=="true"){window.location.href="/admin/login";return}});document.getElementById("logout-btn")?.addEventListener("click",function(){localStorage.removeItem("adminLoggedIn"),localStorage.removeItem("adminLoginTime"),window.location.href="/admin/login"});function a(e){document.getElementById(e)?.classList.remove("hidden")}function t(e){document.getElementById(e)?.classList.add("hidden")}function l(){const e=document.getElementById("content-area");e&&(e.innerHTML=`
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Medical Terms List</h3>
            <p class="text-gray-600 mb-4">Total Terms: " + totalTerms + "</p>
            <div class="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p class="text-blue-800">Feature coming soon: Full terms management interface with edit/delete capabilities.</p>
            </div>
          </div>
        `)}function i(){const e=document.getElementById("content-area");e&&(e.innerHTML=`
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Blog Posts Management</h3>
            <p class="text-gray-600 mb-4">Total Posts: " + totalPosts + "</p>
            <div class="bg-purple-50 border border-purple-200 rounded-md p-4">
              <p class="text-purple-800">Feature coming soon: Full blog management interface with edit/delete/publish capabilities.</p>
            </div>
          </div>
        `)}function r(){const e=document.getElementById("content-area");e&&(e.innerHTML=`
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Export Medical Terms</h3>
            <div class="bg-green-50 border border-green-200 rounded-md p-4">
              <p class="text-green-800">Export functionality will be available soon. You'll be able to export terms in JSON, CSV, and Excel formats.</p>
            </div>
          </div>
        `)}function s(){const e=document.getElementById("content-area");e&&(e.innerHTML=`
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Export Blog Data</h3>
            <div class="bg-green-50 border border-green-200 rounded-md p-4">
              <p class="text-green-800">Export functionality will be available soon. You'll be able to export blog posts with all metadata.</p>
            </div>
          </div>
        `)}document.getElementById("add-term-form")?.addEventListener("submit",function(e){e.preventDefault(),alert("Term would be added to the database. This is a demo version."),t("add-term-modal"),e.target.reset()});document.getElementById("add-blog-form")?.addEventListener("submit",function(e){e.preventDefault(),alert("Blog post would be added to the database. This is a demo version."),t("add-blog-modal"),e.target.reset()});window.addEventListener("click",function(e){["add-term-modal","add-blog-modal"].forEach(n=>{const d=document.getElementById(n);e.target===d&&t(n)})});window.openModal=a;window.closeModal=t;window.showTermsList=l;window.showBlogList=i;window.exportTerms=r;window.exportBlogData=s;
