function sortArray(nums,command){
   return command == "asc" ? nums.sort((a,b)=> a-b) : nums.sort((a,b)=> b - a)
}

sortArray([14, 7, 17, 6, 8], 'desc')