<template>
  <div>
    <div>
      <h1>Move the #content with the portal component</h1>
      <teleport to="#endofbody">
        <div id="content">
          <p>
            this will be moved to #endofbody.<br />
            Pretend that it's a modal
          </p>
          <Child />
        </div>
      </teleport>
    </div>
  </div>
</template>
