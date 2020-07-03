# Promiser
Make your promises prettier with this simple wrapper, that can help you write promises without using a callback!

## Usage
<pre>
function foo() {
    const promiser = new Promiser();

    setTimeout(() => {
        let lucky = Math.random();

        if (lucky > 0.8)
            promiser.resolve("Oh yes! You're very lucky!");
        else
            promiser.reject("I suggest you to try again :( ... next year");
    }, 1500);

    return promiser.promise;
}
</pre>

You can also check if a `Promiser` instance has already been solved by calling `promiser.isSolved` getter which will return `true` if `promiser` has been solved and false if not.

A single instance of `Promiser` can be used only once, so once you have solved your promise, that instance can't be reused for resolving/rejecting any other value!