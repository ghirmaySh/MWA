angular
  .module("meanJobSearch").controller("JobPartialUpdateController", JobPartialUpdateController);

function JobPartialUpdateController(JobsDataFactory, $routeParams) {
  const vm = this;
  const jobId = $routeParams.id;

  vm.partialJob = function () {
    console.log("update received");

    const postData = {
      title: vm.title,
      salary: vm.salary,
      description: vm.description,
      experience: vm.experience,
      postDate: vm.postDate,
      skills: vm.skills,
      address: vm.address,
      lng: vm.lng,
      lat: vm.lat,
    };
    JobsDataFactory.partialUpdate(jobId, postData)
      .then(function (response) {
        console.log("Job updated ");
      })
      .catch(function (error) {
        console.log("Error while  updating ", error);
      });
  };
}
