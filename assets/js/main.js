// Global JavaScript for EcoOil V2

document.addEventListener('DOMContentLoaded', () => {
    // 0. Remove Loading Screen
    const loader = document.getElementById('global-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('opacity-0');
            setTimeout(() => loader.remove(), 500); // Wait for transition
        }, 500); // Fake small delay for effect
    }

    // 1. Navbar Sticky & Transparent Logic
    const navbar = document.getElementById('navbar');
    if (navbar && navbar.classList.contains('bg-transparent')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('glass', 'shadow-md');
                navbar.classList.remove('bg-transparent', 'text-white');
                navbar.classList.add('bg-white', 'dark:bg-slate-900', 'text-slate-800', 'dark:text-white');
            } else {
                navbar.classList.remove('glass', 'shadow-md', 'bg-white', 'dark:bg-slate-900', 'text-slate-800', 'dark:text-white');
                navbar.classList.add('bg-transparent', 'text-white');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. Dark Mode Toggle
    const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile, #theme-toggle-dash');
    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            if (typeof updateChartTheme === 'function') {
                updateChartTheme(); // Update charts if on dashboard
            }
        });
    });

    // 4. RTL Toggle
    const rtlToggles = document.querySelectorAll('#rtl-toggle, #rtl-toggle-mobile');
    rtlToggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const html = document.documentElement;
            if (html.getAttribute('dir') === 'rtl') {
                html.setAttribute('dir', 'ltr');
                html.setAttribute('lang', 'en');
                localStorage.setItem('dir', 'ltr');
            } else {
                html.setAttribute('dir', 'rtl');
                html.setAttribute('lang', 'ar');
                localStorage.setItem('dir', 'rtl');
            }
            
            // Re-init AOS to fix positioning on flip
            if (typeof AOS !== 'undefined') {
                setTimeout(() => AOS.refresh(), 300);
            }
        });
    });

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden', 'opacity-0', 'translate-y-4');
                backToTopBtn.classList.add('flex', 'opacity-100', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-4');
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
                setTimeout(() => {
                    if (window.scrollY <= 300) backToTopBtn.classList.add('hidden');
                }, 300); // match transition duration
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 6. Scroll Progress Bar
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
        });
    }
    
    // 7. Initialize AOS Animations if present
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // 8. Initialize Lucide Icons if present
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 9. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('button');
        if(btn) {
            btn.addEventListener('click', () => {
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');
                
                // Close all others
                faqItems.forEach(otherItem => {
                    if(otherItem !== item) {
                        const otherContent = otherItem.querySelector('.faq-content');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        if(otherContent) {
                            otherContent.style.maxHeight = null;
                            otherContent.classList.remove('mt-4');
                        }
                        if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.classList.remove('mt-4');
                    if(icon) icon.style.transform = 'rotate(0deg)';
                } else {
                    content.classList.add('mt-4');
                    content.style.maxHeight = content.scrollHeight + "px";
                    if(icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        }
    });

    // 10. Animated Counters
    const counters = document.querySelectorAll('.counter-val');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                    obs.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    // 11. Sidebar Navigation State
    const sidebar = document.getElementById('sidebar');
    const openSidebar = document.getElementById('open-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    
    if (openSidebar && sidebar) {
        openSidebar.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full', 'rtl:translate-x-full');
        });
    }

    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full', 'rtl:translate-x-full');
        });
    }

    // 12. Set Active Menu Item for Sidebar
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    // Remove query params or hashes just in case
    currentPath = currentPath.split('?')[0].split('#')[0];
    const currentBase = currentPath.replace('.html', '');
    const isDashboardPath = window.location.pathname.includes('/dashboard/');

    const sidebarLinks = document.querySelectorAll('#sidebar a[data-page]');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024 && sidebar) {
                sidebar.classList.add('-translate-x-full', 'rtl:translate-x-full');
            }
        });

        const page = link.getAttribute('data-page');
        if (!page) return;
        const pageBase = page.split('?')[0].split('#')[0].replace('.html', '').split('/').pop();

        if (pageBase === currentBase) {
            link.classList.remove('text-slate-400', 'hover:bg-slate-800', 'hover:text-white', 'border-transparent');
            link.classList.add('bg-emerald-500/20', 'text-emerald-400', 'font-medium', 'border', 'border-emerald-500/20');
        } else {
            link.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'font-medium', 'border-emerald-500/20');
            link.classList.add('text-slate-400', 'hover:bg-slate-800', 'hover:text-white', 'border-transparent', 'border');
        }
    });

    // 13. Active Navbar Logic (Main site)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (!linkPage) return;

        const linkBase = linkPage.split('?')[0].split('#')[0].replace('.html', '');
        const linkFile = linkBase.split('/').pop();

        // Ensure we don't activate main site "Home" when in dashboard, unless the link specifically includes 'dashboard'
        if (isDashboardPath && !linkBase.includes('dashboard')) {
            return;
        }

        if (linkFile === currentBase || (currentBase === '' && linkFile === 'index')) {
            
            // Highlight the link itself
            link.classList.add('text-emerald-500', 'font-bold');
            link.classList.remove('text-slate-700', 'dark:text-slate-300', 'hover:text-emerald-500');
            
            // If it's a dropdown item (Home 1 / Home 2), show the checkmark icon
            const activeIcon = link.querySelector('.active-icon');
            if (activeIcon) {
                activeIcon.classList.remove('hidden');
            }
            
            // For Services mega menu title
            const title = link.querySelector('.font-semibold');
            if (title) {
                title.classList.remove('text-slate-900', 'dark:text-white');
                title.classList.add('text-emerald-600', 'dark:text-emerald-400');
            }
            
            // Highlight the parent dropdown trigger (if it's in a dropdown)
            const parentItem = link.closest('.nav-item');
            if (parentItem) {
                const parentTrigger = parentItem.querySelector('.nav-trigger');
                if (parentTrigger) {
                    parentTrigger.classList.add('text-emerald-500');
                }
            }
        }
    });
});

// Utility Functions for Modals
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Handle animations if inner elements have them
        const backdrop = modal.querySelector('.absolute.inset-0, .fixed.inset-0');
        const content = modal.querySelector('.relative');
        if (backdrop && content) {
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                content.classList.remove('opacity-0', 'scale-95');
            }, 10);
        }
    }
}

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        const backdrop = modal.querySelector('.absolute.inset-0, .fixed.inset-0');
        const content = modal.querySelector('.relative');
        
        if (backdrop && content) {
            backdrop.classList.add('opacity-0');
            content.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300); // Matches transition duration
        } else {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    }
}

// Unified Toast Notification System
window.showToast = function(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        // Using start-4 for RTL compatibility
        container.className = 'fixed bottom-4 start-4 z-50 flex flex-col gap-2'; 
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const baseClasses = 'flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-10 opacity-0 min-w-[250px]';
    
    let colorClasses = '';
    let iconName = '';
    
    if (type === 'success') {
        colorClasses = 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800';
        iconName = 'check-circle';
    } else if (type === 'error') {
        colorClasses = 'bg-red-50 text-red-800 dark:bg-red-900/80 dark:text-red-100 border border-red-200 dark:border-red-800';
        iconName = 'alert-circle';
    } else {
        colorClasses = 'bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700';
        iconName = 'info';
    }

    toast.className = `${baseClasses} ${colorClasses}`;
    toast.innerHTML = `
        <i data-lucide="${iconName}" class="h-5 w-5 shrink-0 ${type === 'success' ? 'text-emerald-500' : type === 'error' ? 'text-red-500' : 'text-sky-500'}"></i>
        <p class="text-sm font-medium">${message}</p>
        <button class="ms-auto shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" onclick="this.parentElement.remove()">
            <i data-lucide="x" class="h-4 w-4"></i>
        </button>
    `;

    container.appendChild(toast);
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({
            root: toast
        });
    }

    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    // Animate out
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => {
                if (toast.parentElement) toast.remove();
            }, 300);
        }
    }, 3000);
};
