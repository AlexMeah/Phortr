import path from 'path';

const rawFormats = {
    '.3fr': true,
    '.ari': true,
    '.arw': true,
    '.bay': true,
    '.crw': true,
    '.cr2': true,
    '.cap': true,
    '.dcs': true,
    '.dcr': true,
    '.dng': true,
    '.drf': true,
    '.eip': true,
    '.erf': true,
    '.fff': true,
    '.iiq': true,
    '.k25': true,
    '.kdc': true,
    '.mdc': true,
    '.mef': true,
    '.mos': true,
    '.mrw': true,
    '.nef': true,
    '.nrw': true,
    '.obm': true,
    '.orf': true,
    '.pef': true,
    '.ptx': true,
    '.pxn': true,
    '.r3d': true,
    '.raf': true,
    '.raw': true,
    '.rwl': true,
    '.rw2': true,
    '.rwz': true,
    '.sr2': true,
    '.srf': true,
    '.srw': true,
    '.tif': true,
    '.x3f': true
};

module.exports = function hasRAW(filePath, fileName, files) {
    let raw = false;
    const a = path.basename(fileName);
    const basename = a.substr(0, a.lastIndexOf('.'));

    for (let i = 0; i < files.length; i++) {
        const ext = path.extname(files[i]);
        const x = path.basename(files[i]);
        const basenameToTest = x.substr(0, x.lastIndexOf('.'));

        if (
            rawFormats[ext.toLowerCase()] &&
            basenameToTest === basename
        ) {
            raw = path.join(filePath, basenameToTest + ext);
            break;
        }
    }

    return raw;
};
