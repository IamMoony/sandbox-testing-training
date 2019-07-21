package sorting_algorythms;

public class BubbleSort {

    public int[] bubbleSort(int[] toBeSorted) {

            int temp;
            for(int i = 1; i < toBeSorted .length; i++) {
                for(int j=0; j<toBeSorted.length-i; j++) {
                    if(toBeSorted[j]>toBeSorted[j+1]) {
                        temp=toBeSorted[j];
                        toBeSorted[j]=toBeSorted[j+1];
                        toBeSorted[j+1]=temp;
                    }

                }
            }
            return toBeSorted;
        }
            }



