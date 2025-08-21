import"./Layout.astro_astro_type_script_index_0_lang.C5a_LS-D.js";document.addEventListener("DOMContentLoaded",function(){if(localStorage.getItem("adminLoggedIn")!=="true"){window.location.href="/admin/login";return}});document.getElementById("logoutBtn")?.addEventListener("click",function(){localStorage.removeItem("adminLoggedIn"),localStorage.removeItem("adminLoginTime"),window.location.href="/admin/login"});function n(e){const t=document.getElementById(e);t&&(t.classList.add("show"),document.body.style.overflow="hidden")}function o(e){const t=document.getElementById(e);t&&(t.classList.remove("show"),document.body.style.overflow="")}function i(){const e=document.getElementById("contentArea");e&&(e.innerHTML=`
        <div style="text-align: center;">
          <div style="width: 64px; height: 64px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #9ca3af;">
            <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Medical Terms List</h3>
          <p style="color: #6b7280; margin: 0 0 20px 0;">Total Terms: ${totalTerms}</p>
          <div style="background: #dbeafe; border: 1px solid #93c5fd; border-radius: 8px; padding: 20px; max-width: 400px; margin: 0 auto;">
            <p style="color: #1e40af; margin: 0;">Feature coming soon: Full terms management interface with edit/delete capabilities.</p>
          </div>
        </div>
      `)}function d(){const e=document.getElementById("contentArea");e&&(e.innerHTML=`
        <div style="text-align: center;">
          <div style="width: 64px; height: 64px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #9ca3af;">
            <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 6.253v13"/>
            </svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Blog Posts Management</h3>
          <p style="color: #6b7280; margin: 0 0 20px 0;">Total Posts: ${totalPosts}</p>
          <div style="background: #f3e8ff; border: 1px solid #c4b5fd; border-radius: 8px; padding: 20px; max-width: 400px; margin: 0 auto;">
            <p style="color: #7c3aed; margin: 0;">Feature coming soon: Full blog management interface with edit/delete/publish capabilities.</p>
          </div>
        </div>
      `)}function a(){const e=document.getElementById("contentArea");e&&(e.innerHTML=`
        <div style="text-align: center;">
          <div style="width: 64px; height: 64px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #9ca3af;">
            <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Export Medical Terms</h3>
          <div style="background: #d1fae5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 20px; max-width: 400px; margin: 0 auto;">
            <p style="color: #065f46; margin: 0;">Export functionality coming soon. You'll be able to export terms in JSON, CSV, and Excel formats.</p>
          </div>
        </div>
      `)}function r(){const e=document.getElementById("contentArea");e&&(e.innerHTML=`
        <div style="text-align: center;">
          <div style="width: 64px; height: 64px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #9ca3af;">
            <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Export Blog Data</h3>
          <div style="background: #d1fae5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 20px; max-width: 400px; margin: 0 auto;">
            <p style="color: #065f46; margin: 0;">Export functionality coming soon. You'll be able to export blog posts with all metadata.</p>
          </div>
        </div>
      `)}document.getElementById("add-term-form")?.addEventListener("submit",function(e){e.preventDefault(),alert("Term would be added to the database. This is a demo version."),o("add-term-modal"),this.reset()});document.getElementById("add-blog-form")?.addEventListener("submit",function(e){e.preventDefault(),alert("Blog post would be added to the database. This is a demo version."),o("add-blog-modal"),this.reset()});document.addEventListener("click",function(e){e.target.classList.contains("modal")&&o(e.target.id)});window.openModal=n;window.closeModal=o;window.showTermsList=i;window.showBlogList=d;window.exportTerms=a;window.exportBlogData=r;
