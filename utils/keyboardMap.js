function mapKeyToNote(key) {
  switch (key) {
    case 'a':
      return 'C4';
    case 's':
      return 'D4';
    case 'd':
      return 'E4';
    case 'f':
      return 'F4';
    case 'g':
      return 'G4';
    case 'h':
      return 'A4';
    case 'j':
      return 'B4';
    case 'k':
      return 'C5';
    case 'i':
      return 374;
    case 'o':
      return 375;
    case 'p':
      return 376;
    default:
      return -1;
  }
}

export default mapKeyToNote;
