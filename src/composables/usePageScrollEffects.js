import { ref } from 'vue'

export function usePageScrollEffects(options = {}) {
  const navScrolled = ref(false)

  const checkFadeElements = () => {
    document.querySelectorAll('.fade-in').forEach((el) => {
      const rect = el.getBoundingClientRect()
      const visible = rect.top < window.innerHeight - 100 && rect.bottom > 0
      if (visible) el.classList.add('visible')
    })
  }

  const handleScroll = () => {
    navScrolled.value = window.scrollY > window.innerHeight
    checkFadeElements()
  }

  const enableSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href')
        if (!targetId || targetId === '#') return
        e.preventDefault()
        const targetEl = document.querySelector(targetId)
        if (targetEl) {
          window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' })
          if (typeof options.onAnchorNavigate === 'function') {
            options.onAnchorNavigate()
          }
        }
      })
    })
  }

  let scrollHandler = null
  let loadHandler = null

  const init = () => {
    // Attach handlers
    scrollHandler = handleScroll
    window.addEventListener('scroll', scrollHandler)
    loadHandler = () => checkFadeElements()
    window.addEventListener('load', loadHandler)

    // Initial run to set states correctly
    handleScroll()
    enableSmoothScroll()
  }

  const cleanup = () => {
    if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
    if (loadHandler) window.removeEventListener('load', loadHandler)
  }

  return { navScrolled, init, cleanup }
}