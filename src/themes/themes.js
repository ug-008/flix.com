
export default function Themes(_default_) {

    switch(_default_) {
        case 1: 
            // light
            document.documentElement.style.setProperty('--bg', '#ddd');
            document.documentElement.style.setProperty('--ui', '#eee');
            document.documentElement.style.setProperty('--font', '#333');
            document.documentElement.style.setProperty('--accent', 'red');
            document.documentElement.style.setProperty('--hover', '#ddd');
        break;

        case 2: 
            // green
            document.documentElement.style.setProperty('--bg', '#ddd');
            document.documentElement.style.setProperty('--ui', 'darkgreen');
            document.documentElement.style.setProperty('--font', '#eee');
            document.documentElement.style.setProperty('--accent', 'orange');
            document.documentElement.style.setProperty('--hover', 'green');
        break;

        default: 
            // dark
            document.documentElement.style.setProperty('--bg', '#222');
            document.documentElement.style.setProperty('--ui', '#333');
            document.documentElement.style.setProperty('--font', '#bbb');
            document.documentElement.style.setProperty('--accent', 'orange');
            document.documentElement.style.setProperty('--hover', '#555');
    }

    return (_default_);
    
}