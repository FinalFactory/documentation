---
sidebar_position: 10
sidebar_label: Samples
---
# Samples

You can find the samples for Final Tagger in the Unity Package Manager. Simply navigate to the Final Tagger section and look under the 'Samples' category to access and explore various sample implementations and configurations.

![Samples](https://static.wixstatic.com/media/880a29_28aea4d5b766446fa1974b8c34a6d00c~mv2.png) (Sample Picture)

## Filtering Strategy Units

This example shows how to filter for strategy units.
To get the result showen in the image below, select:

```
And -> Small -> Or -> Cube -> Not -> Green
```

You will get the following result:
    ![Example1](/img/tagger/Example1.png)

### What happend?

Basically, the search string would be:

```
Small | (Cube && !Green)
```

This results in two compositions that are searched:
Any GameObjects with the Tag: Small
Any GameObjects with the Tags: Cube and not Green

The search string and search compositions are displayed in the example in real time.

## Group Search Inventory

This example shows how to filter a inventory by tags.

You can click on the tags on the left side to filter the inventory on the right side.

![Example2](/img/tagger/Example2.png)

## Filter Script

This example demonstrate how the TaggerFilter class works. This is an editor only example and works within the inspector only.

![Example3](/img/tagger/Example3.png)
![Example4](/img/tagger/Example4.png)

Both example images have the blue tag set on the GameObject. On the left side the filter matches the GameObject, indicated by the checkmark in `Filter Matching`. On the right side the filter does not match.

## Advanced Filter Script

This is a script only example. The including script in the example shows how to create advanced filter for GameObjects in different ways. Inspect the included script for more information.


## Performance Test

This demonstrate the performance of Final Tagger on your system.
To use the test, enter playmode and select the test object number.
Then spawn the test object and add random tags. This two steps prepare the GameObjects for the real tests.

### Test 1
This test creates the all the search compositions based on the search pattern.

The search pattern is:

(Green & Red) | (Red & Blue) | (Cube & Green)

![Example5](/img/tagger/Example5.png)

The resulting search compositions are:
Green & Red
Red & Blue
Cube & Green

### Test 2

This test collects the GameObject based on the research. It creates the list and returns it.


:::note

Because of JIT. The first time executing code is always the slowest. This is also the reason why Benchmark Libraries perform a warmup. You should execute the test more than once to get real numbers.

:::