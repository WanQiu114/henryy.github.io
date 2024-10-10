/*=============== SHOW MENU ===============*/
/*这段 JavaScript 代码的目的是控制移动端导航菜单的显示和隐藏功能，并在点击菜单项时自动关闭菜单。下面是逐步解释：*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById('nav-close')

    /*检查 navToggle 是否存在（用于避免页面没有这个元素时的错误）。
如果存在，当点击 navToggle 按钮时，向 navMenu 元素添加 show-menu 类，从而显示菜单。*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*检查 navClose 是否存在。
如果存在，当点击 navClose 按钮时，移除 navMenu 元素的 show-menu 类，隐藏菜单。*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
/*使用 querySelectorAll 获取页面中所有具有 .nav__link 类的元素，这些通常是导航菜单中的链接项。*/
const navLink = document.querySelectorAll('.nav__link')
/*定义了一个名为 linkAction 的函数，用于在每次点击导航链接时执行。
当某个导航链接被点击时，移除 navMenu 元素的 show-menu 类，从而关闭菜单*/
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
/*为每个 .nav__link 元素添加一个点击事件监听器，触发 linkAction 函数，这样当用户点击菜单中的任一链接时，菜单就会关闭*/
navLink.forEach(n=> n.addEventListener('click',linkAction))



/*=============== ADD BLUR HEADER ===============*/
/*添加到css文件，也就是在css里面定义一下这个.blur-header 287行
这段代码的功能是通过 JavaScript 和 CSS 实现页面头部在滚动时模糊化的效果。我们来逐步解释这段代码的工作原理。
const blurHeader = () => {}: 定义了一个箭头函数 blurHeader，用于在页面滚动时执行。
const header = document.getElementById('header'): 获取页面中 ID 为 header 的元素，通常是网页的头部。
this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header'):
this.scrollY: 表示页面在垂直方向上滚动的像素值。
当页面垂直滚动的距离大于或等于 50 像素时，给头部元素添加类 .blur-header，触发头部的模糊效果。
当页面滚动小于 50 像素时，移除类 .blur-header，取消模糊效果。
window.addEventListener('scroll', blurHeader): 为 window 添加一个滚动事件监听器，每当页面滚动时都会执行 blurHeader 函数。*/
const blurHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ?header.classList.add('blur-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)



/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/




/*这段 JavaScript 代码的作用是实现导航栏中的链接高亮功能，即当页面滚动到某个 section 对应的位置时，  在css里面的341行
会给该 section 关联的导航链接添加一个特定的样式（如 active-link 类），使得当前滚动区域的导航项高亮显示。*/

/*解释：这行代码使用 document.querySelectorAll('section[id]') 选择页面中所有带有 id 属性的 <section> 元素。通常，我们给每个页面中的 section 定义一个 id，用于链接和跳转目的。*/
const sections = document.querySelectorAll('section[id]')

/*解释：定义了一个箭头函数 scrollActive，用来检测滚动事件。
window.scrollY 返回页面垂直方向上滚动的像素值，即用户当前滚动了多少距离。*/
const scrollActive = () =>{
    const scrollDown = window.scrollY
    /*sections.forEach(current => {...}) 遍历之前选取的每个 section。
        current.offsetHeight：获取当前 section 的高度。
        current.offsetTop - 58：获取当前 section 距离页面顶部的偏移量（减去 58 像素，这个值通常用于调整导航栏的高度，以便准确对齐）。
        current.getAttribute('id')：获取当前 section 的 id 属性。
        document.querySelector('.nav__menu a[href*=' + sectionId + ']')：根据 sectionId 在导航栏中找到与 section 相关联的链接（a 标签）。
        通过 href 属性匹配链接中包含当前 section 的 id 的链接。*/
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop -58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        /*if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)：
        判断当前页面滚动位置是否位于该 section 的范围内（即页面滚动距离 scrollDown 是否大于 sectionTop 且小于或等于 sectionTop + sectionHeight，确保用户处于该 section 的可见区域内）。
        如果条件满足，则为导航菜单中对应的链接 sectionClass 添加 active-link 类，使其高亮显示。
        如果条件不满足，则移除 active-link 类。*/
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')

        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
/*解释：这行代码为 window 对象添加了一个滚动事件监听器，每当用户滚动页面时，都会调用 scrollActive 函数，动态更新导航栏链接的高亮状态。 */
window.addEventListener('scroll', scrollActive)






/*=============== SCROLL REVEAL ANIMATION ===============*/
