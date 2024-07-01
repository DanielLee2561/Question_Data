/*
  Fibonacci Sequence
  Parameters:
    n - A non-negative integer for which the fibonacci sequence is to be calculated.
  Return:
    The fibonacci sequence of n. If n is 0, return 0. If n is 1, return 1. If n is negative, return -1 (error).
*/

function foo(n)
{
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return foo(n - 1) + foo(n - 2);
  }
};