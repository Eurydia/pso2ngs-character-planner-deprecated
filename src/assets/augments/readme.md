# Augments

## Data structure

The data structure of an augment looks like this.

```Typescript
{
    name: string;
    level: number;
    group: AugmentGroup;
    conflict: AugmentGroup[];
    payload: StatPayload;
    isSType: boolean;
}
```

Where:

* `name` and `level` properties carry the augment's signature, 
* `isSType` property tell the renderer whether to suffix the name with "S" or not.
* `group` and `conflict` properties carry information which help validate whether augments are allowed to be used together or not, 
* `payload` properties carry the information that will be use to calculate stats, and

## Missing

### \[✅\] Seperation between normal and S augments

Right now, there is no way to distinquish normal and S type augments from each other.

#### - Proprosal

If the names of the augments are the same, 
then the validation logic will naturally prohibit them  
from being used together. However, by simply suffixing the "S"  
will prevent the logic from properly working. 

E.g.

```Javascript
// Augment #1
{
    name: "stamina",
    level: 1,
}
// Augment #2
{
    name: "stamina",
    level: 3,
}
// Augment #3 
{
    name: "stamina s",
    level: 3,
}
```

`Augment #2` will always conflict with `Augment #1` , 
but never with `Augment #3` .

#### - Solution

With current structure, there can be no distinction between normal and S augments.  
But with an additional property `isSType`, 
renderer can be notify to suffix the options with "S" or not.

This solution should be the most simple.  
It requires no need to modify the validation logic, only render logic.
