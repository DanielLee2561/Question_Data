/*
  Factorial
  Parameters:
    n - A non-negative integer for which the factorial is to be calculated.
  Return:
    The factorial of n. If n is 0, return 1. If n is negative, return -1 (error).
*/

function foo(n)
{
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * foo(n - 1);
  }
};