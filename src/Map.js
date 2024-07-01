/*
  Map
  Parameters:
    n - An integer to added to each element of m.
    m - An array of integers.
  Return:
    The array m with each element increased by n.
*/

function foo(n, m)
{
  let m_copy = new Array(m.length);
  for (let o = 0; o < m.length; o++) {
    m_copy[o] = m[o] + n;
  }
  return m_copy;
};