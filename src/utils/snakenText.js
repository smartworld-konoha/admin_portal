export default function(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}