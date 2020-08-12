function convertToPath(string) {
    return string.toLowerCase().replace(/ /g, '-').replace(/[:'!@#$%^*\(\)";{}\[\]\|~`<>\/\\?\.,]/g, '')
}

function convertFromPath(path) {
    return path.split('-').map((word, i, ary) =>
        word === 'previews' || word === 'columnsfeatures'
            ? word === 'previews' ? 'Previews:' : 'Columns/Features'
            : (i === 0 || i === ary.length - 1 || !['the', 'on', 'and', 'whats'].includes(word))
                ? !['tv', 'aj', 'cola', 'ucsb', 'uc'].includes(word)
                    ? word[0].toUpperCase() + word.slice(1)
                    : word.toUpperCase()
                : word === 'whats' ? 'What\'s' : word).join(' ')
}

let t = 'Science & Tech';

console.log(convertToPath(t));
// console.log(convertFromPath(convertToPath(t)));