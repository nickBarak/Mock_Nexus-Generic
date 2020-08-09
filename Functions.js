export function convertDate(date) {
    let now = new Date(),
        secondsPast = (now.getTime() - date) / 1000;
    if (secondsPast < 60) {
        return parseInt(secondsPast) + ` second${parseInt(secondsPast) > 1 ? 's' : ''} ago`;
    }
    if (secondsPast < 3600) {
        return parseInt(secondsPast / 60) + ` minute${parseInt(secondsPast / 60) > 1 ? 's' : ''} ago`;
    }
    if (secondsPast <= 86400) {
        return parseInt(secondsPast / 3600) + ` hour${parseInt(secondsPast / 3600) > 1 ? 's' : ''} ago`;
    }
    return new Date(date).toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function convertToPath(string) {
    return string.toLowerCase().replace(/ /g, '-').replace(/[:'!@#$%^&*\(\)";{}\[\]\|~`<>\/\\?\.,]/g, '')
}

export function convertFromPath(path) {
    return path.split('-').map((word, i) => (i === 0 || !['the', 'on'].includes(word)) ? word[0].toUpperCase() + word.slice(1) : word).join(' ')
}

export function testEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

export function copyToClipboard(text) {
    const el = document.createElement('input');
    el.value = text;
    el.style.visibility = 'none';
    el.style.height = 0;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
}