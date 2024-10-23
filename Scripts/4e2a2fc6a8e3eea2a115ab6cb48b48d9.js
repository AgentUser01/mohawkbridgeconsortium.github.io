// Modernized JavaScript File

// Utility to handle class manipulation for a DOM element
class DOMClassManager {
    constructor(element) {
      this.element = element;
    }
  
    add(...classes) {
      classes.forEach(cls => this.element.classList.add(cls));
    }
  
    remove(...classes) {
      classes.forEach(cls => this.element.classList.remove(cls));
    }
  
    toggle(cls) {
      return this.element.classList.toggle(cls);
    }
  
    contains(cls) {
      return this.element.classList.contains(cls);
    }
  }
  
  // Example usage for adding and removing classes
  const element = document.querySelector('.my-element');
  const manager = new DOMClassManager(element);
  manager.add('active', 'visible');
  manager.remove('hidden');
  
  // Utility to create and dispatch a custom event
  const dispatchCustomEvent = (eventName, target, detail = null) => {
    try {
      const event = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true,
        detail
      });
      target.dispatchEvent(event);
    } catch (error) {
      console.warn(`Browser does not support dispatching event: ${error}`);
    }
  };
  
  // Utility to fade in an element
  const fadeIn = (element, duration, callback) => {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.display = '';
  
    const startTime = Date.now();
  
    const fade = () => {
      opacity = (Date.now() - startTime) / duration;
      element.style.opacity = Math.min(opacity, 1);
  
      if (opacity < 1) {
        requestAnimationFrame(fade);
      } else if (callback) {
        callback();
      }
    };
  
    fade();
  };
  
  // Utility to fade out an element
  const fadeOut = (element, duration, callback) => {
    let opacity = parseFloat(getComputedStyle(element).opacity);
  
    const startTime = Date.now();
  
    const fade = () => {
      opacity -= (Date.now() - startTime) / duration;
      element.style.opacity = Math.max(opacity, 0);
  
      if (opacity > 0) {
        requestAnimationFrame(fade);
      } else {
        element.style.display = 'none';
        if (callback) {
          callback();
        }
      }
    };
  
    fade();
  };
  
  // Example usage for fading elements
  const targetElement = document.querySelector('#fade-target');
  fadeIn(targetElement, 500, () => console.log('Fade-in complete.'));
  fadeOut(targetElement, 500, () => console.log('Fade-out complete.'));
  
  // Utility to add an element after a target
  const insertAfter = (target, element) => {
    if (target && element) {
      target.insertAdjacentElement('afterend', element);
    }
  };
  
  // Utility to remove an element
  const removeElement = (element) => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };
  
  // Example usage for adding and removing elements
  const newElement = document.createElement('div');
  newElement.textContent = 'This is a new element';
  insertAfter(document.querySelector('.reference-element'), newElement);
  removeElement(newElement);
  
  // Event listener utilities
  const addEventListeners = (elements, event, handler) => {
    elements.forEach(el => el.addEventListener(event, handler));
  };
  
  const removeEventListeners = (elements, event, handler) => {
    elements.forEach(el => el.removeEventListener(event, handler));
  };
  
  // Example usage of event listeners
  const buttons = document.querySelectorAll('.button');
  const handleClick = () => console.log('Button clicked!');
  addEventListeners(buttons, 'click', handleClick);
  removeEventListeners(buttons, 'click', handleClick);
  
  // Example of asynchronous operations using async/await
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Example of fetching data
  fetchData('https://api.example.com/data');
  
  // Example of using template literals for building dynamic HTML content
  const createUserCard = (name, age) => {
    const cardHTML = `
      <div class="user-card">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', cardHTML);
  };
  
  // Create a user card for a new user
  createUserCard('John Doe', 30);