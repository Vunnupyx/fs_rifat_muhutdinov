array = [8, -3, 7, 3, 5, 6, 0, -5, 2]

console.log(array)

function quickSort(array)
{
    if( array.length <= 1)
    {
        return array;
    }
    else
    {
        let q = array[0],
            left = [],
            center = [],
            right = [];
        array.forEach( (n) =>
            {
                if(n > q)
                {
                    right.push(n);
                }
                else if (n < q)
                {
                    left.push(n);
                }
                else
                {
                    center.push(n);
                }
            }
        )
        return quickSort(left).concat(center).concat(quickSort(right));
    }
}

console.log(quickSort(array))