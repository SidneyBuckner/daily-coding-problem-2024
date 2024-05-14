const maxSubarraySum = require('./day1');


it('returns [0, -1] for an already sorted array', () => {
    const array = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maxSubarraySum(array)).toEqual(6);
});